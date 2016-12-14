# Viseo Typescript Course

## Prérequis & installation
 1. Vous aurez besoin [Node JS](https://nodejs.org/en/) ** en version 4 minimum**. Vérifiez que Node et npm sont correctement installés :
 ```
 node -- version
 npm -- version
 ```

 2. Typescript, évidemment ```
 npm install -g typscript ```

 3. Installez les dépendances du TP :
  ```
  npm i
  ```

 4. Dans un terminal, lancez la compilation :
 ```
 npm start
 ```
Ceci va à la fois lancer une compilation des sources en mode watch, et un mini serveur avec auto-reload.
Les ressources sont servies sur [localhost:3000](http://localhost:3000)

## Exercice
Lancez l'application, qu'est-ce qui est affiché ?

1. **Step 1**
	- Créez une classe Beer
	- Créez une enum pour gérer les types de bière
	- Ajoutez la brasserie d'une bière et affichez la

2. **Step 2**
	- Commencez par gérer 2 bars faisant partie de la chaine 'Les Berthoms'. Ils ont 2 bars à Lyon : un à Vieux Lyon et l'autre à Opéra.
	- Créez une classe Bar, qui a un nom et une carte contenant une liste de bières
	- Affichez tous les bars et leur carte.
	- **Bonus** : Affichez toutes les bières de moins de 8°
	- **Bonus** : Affichez toutes les bières d'une brasserie spécifique

3. **Step 3**
	- Créez une classe personne, avec un sexe (enum), un nom et un prénom
	- Un bar a un responsable et plusieurs serveurs, affichez les.

4. **Step 4**
	- Les bars servent maintenant plusieurs types de boissons : des jus de fruit, des whiskys.
	- Modifiez les classes en conséquence.
	- Organisez la carte en groupant les boissons par catégorie

5. **Step 5**
	- Ajoutez un prix aux boissons, qui doit s'afficher sur la carte
	- Gérez la facturation :
		- Chaque bar a des tickets permettant de gérer la facturation
		- Un ticket a une date, un prix et une liste de boissons
	- Affichez le chiffre d'affaire d'un bar pour une journée
	- **Bonus** : Affichez l'évolution du chiffre d'affaire par rapport à une période précédente