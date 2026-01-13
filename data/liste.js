const srcListe = [
  {
    id: 1,
    name: 'Inception',
    affiche: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg',
    resume:
      "Dom Cobb est un voleur expérimenté, le meilleur dans l'art dangereux de l'extraction. Sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est le plus vulnérable. Cette compétence rare a fait de lui un acteur convoité dans le monde de l'espionnage industriel, mais aussi un fugitif traqué.",
    date: '2010-07-21',
    genre: ['Science-Fiction', 'Action', 'Thriller'],
    onAir: false,
  },
  {
    id: 2,
    name: 'The Dark Knight',
    affiche: 'https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg',
    resume:
      "Batman aborde une phase décisive de sa guerre au crime. Avec l'aide du lieutenant de police Jim Gordon et du procureur Harvey Dent, Batman entreprend de démanteler les dernières organisations criminelles qui infestent les rues de la ville. L'association s'avère efficace, mais le trio se heurte bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans Gotham : le Joker.",
    date: '2008-08-13',
    genre: ['Action', 'Crime', 'Drame'],
    onAir: true,
  },
  {
    id: 3,
    name: 'Le Voyage de Chihiro',
    affiche: 'https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/00/02/36/71/chihiro.jpg',
    resume:
      'Chihiro, une fillette de 10 ans, est en route vers sa nouvelle maison avec ses parents. Ils font une halte dans un parc à thème abandonné. Après que ses parents ont été transformés en cochons pour avoir mangé la nourriture des esprits, Chihiro doit travailler dans un bain public pour sorciers et dieux, dirigé par la sorcière Yubaba, pour tenter de sauver ses parents et retourner dans le monde humain.',
    date: '2001-07-20',
    genre: ['Animation', 'Aventure', 'Fantastique'],
    onAir: false,
  },
  {
    id: 4,
    name: 'Parasite',
    affiche: 'https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg',
    resume:
      'Toute la famille de Ki-taek est au chômage et s’intéresse fortement au train de vie de la richissime famille Park. Un jour, leur fils réussit à se faire recommander pour donner des cours particuliers d’anglais chez les Park. C’est le début d’un engrenage incontrôlable, une intrusion progressive et parasitique, dont personne ne sortira véritablement indemne.',
    date: '2019-06-05',
    genre: ['Thriller', 'Drame', 'Comédie noire'],
    onAir: false,
  },
  {
    id: 5,
    name: 'Pulp Fiction',
    affiche: 'https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/36/02/52/18846059.jpg',
    resume:
      "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent. Dans un restaurant, un couple de jeunes braqueurs discute des risques de leur métier. Deux tueurs à gages, Jules Winnfield et son ami Vincent Vega, qui revient d'Amsterdam, ont pour mission de récupérer une mallette mystérieuse pour le compte de leur patron, Marsellus Wallace.",
    date: '1994-10-26',
    genre: ['Crime', 'Drame'],
    onAir: false,
  },
];

module.exports = srcListe;
