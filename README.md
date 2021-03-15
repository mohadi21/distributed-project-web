# distributed-project-web
Le but de ce projet est de faire une application web qui permet de consulter des livres de 4 catégories différents : langage de programmation, développement web, Administration et de base de données.

Cette application permet d’afficher ces livres selon leur catégorie : par exemple :
Web development : Python for SAS user, deep learning with JavaScript ect.
Programming : introduction JaKarta EE CDI, Modern C ect.
Databases : Pro T-SQL 2019, Practical Oracle Cloud Infrastructure ect.
Administration : Professional Outlook 2007 Programming ect.

Coté backend : Spring boot, java 8, maven, JPA, Hibernate (Spring tool suits 3)
Base de donnée : MySql 8
Coté frontend : Angular 9, Bootstrap (Visual code)
L’approche microervice et des conteururs sur docker
On a choisi l’architecture micro service, on a 1 micro service Spring boot que je l’ai embarqué dans un container
et le service frontend sur un container aussi et la base de donnée mySql sur un autre container :
tous les container partagent la même network bookapp
