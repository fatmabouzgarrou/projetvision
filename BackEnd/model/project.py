import numpy as np
from keras.datasets import cifar10
from keras.utils import to_categorical
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from keras.optimizers import Adam
from keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix
import seaborn as sns


# Charger les données CIFAR-10
(train_images, train_labels), (test_images, test_labels) = cifar10.load_data()
# Taille des données d'entraînement
print("Taille des données d'entraînement :", train_images.shape)

# Taille des étiquettes d'entraînement
print("Taille des étiquettes d'entraînement :", train_labels.shape)

# Taille des données de test
print("Taille des données de test :", test_images.shape)

# Taille des étiquettes de test
print("Taille des étiquettes de test :", test_labels.shape)


# Normaliser les images
train_images = train_images.astype('float32') / 255.0
test_images = test_images.astype('float32') / 255.0

# Convertir les étiquettes en catégories
num_classes = 10
train_labels = to_categorical(train_labels, num_classes)
test_labels = to_categorical(test_labels, num_classes)

# Créer le modèle CNN 
def create_cnn_model(input_shape, num_classes):
    model = Sequential()
    model.add(Conv2D(64, (3, 3), activation='relu', input_shape=input_shape))
    model.add(MaxPooling2D((2, 2)))
    model.add(Dropout(0.25))  # Ajout d'une couche de régularisation Dropout
    model.add(Conv2D(128, (3, 3), activation='relu'))
    model.add(MaxPooling2D((2, 2)))
    model.add(Dropout(0.25))  # Ajout d'une couche de régularisation Dropout
    model.add(Conv2D(256, (3, 3), activation='relu'))
    model.add(MaxPooling2D((2, 2)))
    model.add(Flatten())
    model.add(Dense(256, activation='relu'))  # Ajout d'une couche Dense supplémentaire
    model.add(Dropout(0.5))  # Ajout d'une couche de régularisation Dropout
    model.add(Dense(128, activation='relu'))  # Ajout d'une autre couche Dense
    model.add(Dense(num_classes, activation='softmax'))
    return model

# Définition des dimensions de l'entrée
input_shape = train_images.shape[1:]

# Créer le modèle
model = create_cnn_model(input_shape, num_classes)

# Augmentation des données
datagen = ImageDataGenerator(
    rotation_range=20,
    width_shift_range=0.1,
    height_shift_range=0.1,
    horizontal_flip=True)

datagen.fit(train_images)

# Compilation du modèle
model.compile(optimizer=Adam(lr=0.001),
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Entraînement du modèle avec augmentation des données
batch_size = 128
epochs = 30

history = model.fit(datagen.flow(train_images, train_labels, batch_size=batch_size),
                    steps_per_epoch=len(train_images) / batch_size,
                    epochs=epochs,
                    validation_data=(test_images, test_labels))


# Extraire les données d'entraînement et de validation de l'historique
train_loss = history.history['loss']
train_accuracy = history.history['accuracy']
val_loss = history.history['val_loss']
val_accuracy = history.history['val_accuracy']
epochs = range(1, len(train_loss) + 1)
# Tracer la perte d'entraînement et de validation
plt.figure(figsize=(12, 5))
plt.subplot(1, 2, 1)
plt.plot(epochs, train_loss, 'b-', label='Training Loss')
plt.plot(epochs, val_loss, 'r-', label='Validation Loss')
plt.title('Training and Validation Loss')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()
# Tracer la précision d'entraînement et de validation
plt.subplot(1, 2, 2)
plt.plot(epochs, train_accuracy, 'b-', label='Training Accuracy')
plt.plot(epochs, val_accuracy, 'r-', label='Validation Accuracy')
plt.title('Training and Validation Accuracy')
plt.xlabel('Epochs')
plt.ylabel('Accuracy')
plt.legend()
plt.tight_layout()
plt.show()


# Faire des prédictions sur l'ensemble de test
y_pred = model.predict(test_images)
y_pred_classes = np.argmax(y_pred, axis=1)
# Convertir les étiquettes de l'ensemble de test en classes prédites
y_true_classes = np.argmax(test_labels, axis=1)
# Calculer l'exactitude (accuracy) et le score F1
accuracy = accuracy_score(y_true_classes, y_pred_classes)
f1 = f1_score(y_true_classes, y_pred_classes, average='weighted')
print("Exactitude (Accuracy) :", accuracy)
print("Score F1 :", f1)

# Calculer la matrice de confusion
conf_matrix = confusion_matrix(y_true_classes, y_pred_classes)
# Afficher la matrice de confusion avec seaborn
plt.figure(figsize=(10, 8))
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues', xticklabels=range(10), yticklabels=range(10))
plt.title('Matrice de Confusion')
plt.xlabel('Classe Prédite')
plt.ylabel('Classe Réelle')
plt.show()

model.save('cifar-10.h5')