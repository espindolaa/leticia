import { TagTitle } from "./tags";

export const products: {
  name: string;
  link: string;
  imgSrc: string;
  tags: TagTitle[];
  website: string;
  brand: string;
}[] = [
  // {
  //   name:"Frasco de silicone",
  //   link:"https://www.amazon.com/dp/B0793DZR8L?ref=cm_sw_r_cp_ud_dp_YD0139ZWT8M7J0ZAEQ40&social_share=cm_sw_r_cp_ud_dp_YD0139ZWT8M7J0ZAEQ40",
  //   imgSrc:"https://m.media-amazon.com/images/I/51Etog9pM8L._SL1500_.jpg",
  //   tags:["Viagem"],
  //   website:"Amazon EUA",
  //   brand: "Humangear"
  // },
  // {
  //   name:"Sabonete em folhas",
  //   link:"https://www.amazon.com/dp/B0F2KZQYBT?ref=cm_sw_r_cp_ud_dp_CKCZ2VG9D8B7VTS2GXGE&social_share=cm_sw_r_cp_ud_dp_CKCZ2VG9D8B7VTS2GXGE&th=1",
  //   imgSrc:"https://m.media-amazon.com/images/I/51zIg0OMWyL.jpg",
  //   tags:["Viagem"],
  //   website:"Amazon EUA",
  //   brand: "Fomin"
  // },
  // {
  //   name:"Kit costura Fiskars",
  //   link:"https://www.amazon.com.br/dp/B09HR38V1T?ref=cm_sw_r_cp_ud_dp_K4AC4EFQBM2EW0110B5K_2&social_share=cm_sw_r_cp_ud_dp_K4AC4EFQBM2EW0110B5K_2",
  //   imgSrc:"https://m.media-amazon.com/images/I/717Sjez3aLL._AC_SL1500_.jpg",
  //   tag:"Viagem",
  //   website:"Amazon"
  // },
  // {
  //   name:"Tesoura dobrável mini",
  //   link:"https://amzn.to/4vqtmtG",
  //   imgSrc:"https://m.media-amazon.com/images/I/71W-C3s68YL._AC_SL1500_.jpg",
  //   tags:["Viagem"],
  //   website:"Amazon",
  //   brand: "Fiskars"
  // },
  // {
  //   name: "Frasco spray em acrílico",
  //   link: "https://s.shopee.com.br/7pqmOv9Ml7",
  //   imgSrc:
  //     "https://down-br.img.susercontent.com/file/sg-11134201-7repd-m2qrowg4tu61c7.webp",
  //   tags: ["Shopee"],
  //   website: "Shopee",
  //   brand: "Shopee",
  // },
  // {
  //   name:"Mala cloud pequena",
  //   link:"https://amzn.to/4o18K8J",
  //   imgSrc:"https://m.media-amazon.com/images/I/61Xi+F7+qRL._AC_SY741_.jpg",
  //   tags:["Bolsas", "Viagem"],
  //   website:"Amazon",
  //   brand: "Baggu"
  // },
  // {
  //   name:"Bolsa bowler",
  //   link:"https://amzn.to/4vkEoQX",
  //   imgSrc:"https://m.media-amazon.com/images/I/71-EUGl0ARL._AC_SX679_.jpg",
  //   tags:["Bolsas"],
  //   website:"Amazon",
  //   brand: "Baggu"
  // },
  // {
  //   name:"Kit com 3 necessaires",
  //   link:"https://amzn.to/3RSFntf",
  //   imgSrc:"https://m.media-amazon.com/images/I/71khUCwVq6L._AC_SL1500_.jpg",
  //   tags:["Bolsas", "Organização"],
  //   website:"Amazon",
  //   brand: "Baggu"
  // },
  // {
  //   name:"Ecobag dobrável pequena",
  //   link:"https://amzn.to/4vsnhgl",
  //   imgSrc:"https://m.media-amazon.com/images/I/81kgY11nNEL._AC_SX679_.jpg",
  //   tags:["Bolsas"],
  //   website:"Amazon",
  //   brand: "Baggu"
  // },
  // {
  //  name:"Charm para bolsa",
  //  link:"https://cottonon.com/BR/bolsa---bag-charm/4591507-103.html?lang",
  //  imgSrc:"https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-rubishoes/default/dw3112b9d5/4591507/4591507-191-2.jpg?sw=1920&sh=2880&sm=fit",
  //  tags:["Bolsas"],
  //  website:"Cotton On",
  //  brand: "Cotton On"
  // },
  // {
  //   name:"Fone de ouvido WH-1000XM6",
  //   link:"https://amzn.to/4e4Hulk",
  //   imgSrc:"https://m.media-amazon.com/images/I/61ddahpESML._AC_SL1500_.jpg",
  //   tags:["Tech"],
  //   website:"Amazon",
  //   brand: "Sony"
  // },
  // {
  //   name:"Ventilador portátil dobrável",
  //   link:"https://amzn.to/4uf1DLn",
  //   imgSrc:"https://m.media-amazon.com/images/I/611rwOao-iL._AC_SL1500_.jpg",
  //   tags:["Tech", "Viagem"],
  //   website:"Amazon",
  //   brand: "Amazon"
  // },
  // {
  //   name:"Caixa organizadora de bambu",
  //   link:"https://www.angeloni.com.br/eletro/caixa-organizadora-bambu-30x20-acasa-5244484/p?idsku",
  //   imgSrc:"https://eletroangeloni.vtexassets.com/arquivos/ids/1688683-720-720/5244484--2-",
  //   tags:["Organização"],
  //   website:"Angeloni",
  //   brand: "A/Casa"
  // },
  // {
  //   name:"Funil urinário descartável",
  //   link:"https://amzn.to/4o2uO2D",
  //   imgSrc:"https://m.media-amazon.com/images/I/51xHle3hDuL._AC_SL1000_.jpg",
  //   tags:["Cuidados", "Viagem"],
  //   website:"Amazon",
  //   brand: "Pipizito"
  // },
  // {
  //   name:"Caneta tira manchas",
  //   link:"https://amzn.to/4fTybqE",
  //   imgSrc:"https://m.media-amazon.com/images/I/81FlxmoC4BL._AC_SL1500_.jpg",
  //   tags:["Cuidados", "Viagem"],
  //   website:"Amazon",
  //   brand: "Tide"
  // },
  // {
  //   name:"Listerine em folhas",
  //   link:"https://amzn.to/4e1Ax4h",
  //   imgSrc:"https://m.media-amazon.com/images/I/711DwRCax+L._AC_SL1500_.jpg",
  //   tags:["Cuidados", "Viagem"],
  //   website:"Amazon",
  //   brand: "Listerine"
  // },
  // {
  //   name:"Câmera digital FZ55",
  //   link:"https://amzn.to/4u7zRQM",
  //   imgSrc:"https://m.media-amazon.com/images/I/81swjZCbdiL._AC_SL1500_.jpg",
  //   tags:["Tech"],
  //   website:"Amazon",
  //   brand: "Kodak"
  // },
  // {
  //   name:"Gancho de bolsa",
  //   link:"https://amzn.to/4ubc82l",
  //   imgSrc:"https://m.media-amazon.com/images/I/71fiR9I0dpL._AC_SL1500_.jpg",
  //   tags:["Bolsas"],
  //   website:"Amazon",
  //   brand: "Clipa"
  // },
  // {
  //   name:"Adaptador de cartão SD USB-C",
  //   link:"https://amzn.to/4vmx2wm",
  //   imgSrc:"https://m.media-amazon.com/images/I/71YL0TM1erL._AC_SL1500_.jpg",
  //   tags:["Tech"],
  //   website:"Amazon",
  //   brand: "Anker"
  // },
  // {
  //  name:"Pin Snoopy Icebrg",
  //  link:"https://www.icebrg.com.br/loja/busca.php?loja=731014&palavra_busca=snoopy",
  //  imgSrc:"https://images.tcdn.com.br/img/img_prod/731014/pin_icebrg_astronauta_snoopy_1_20250902162535_d3db9acc1ce4.jpg",
  //  tag:"Acessórios",
  //  website:"Icebrg"
  // },
  // {
  //   name:"Óculos de sol Zaya",
  //   link:"https://amzn.to/4o2bNxf",
  //   imgSrc:"https://m.media-amazon.com/images/I/51K2i1nunIL._AC_SX695_.jpg",
  //   tags:["Acessórios"],
  //   website:"Amazon",
  //   brand: "RayBan"
  // },
  // {
  //   name:"Adaptador universal preto",
  //   link:"https://amzn.to/4e4I5n4",
  //   imgSrc:"https://m.media-amazon.com/images/I/61uJEBtHvUL._AC_SL1500_.jpg",
  //   tags:["Tech", "Viagem"],
  //   website:"Amazon",
  //   brand: "Decqle"
  // },
  // {
  //   name:"Mini escova de cabelo",
  //   link:"https://amzn.to/3RU2UtJ",
  //   imgSrc:"https://m.media-amazon.com/images/I/71yUEp6uysL._AC_SL1500_.jpg",
  //   tags:["Viagem"],
  //   website:"Amazon",
  //   brand: "Tangle Teezer"
  // },
  // {
  //   name:"Kit necessaires transparentes",
  //   link:"https://amzn.to/43aB4fj",
  //   imgSrc:"https://m.media-amazon.com/images/I/617mkxvOdiL._AC_SL1500_.jpg",
  //   tags:["Viagem", "Organização"],
  //   website:"Amazon",
  //   brand: "Amazon"
  // },
  // {
  //   name:"Organizador de eletrônicos",
  //   link:"https://amzn.to/4vo3QFj",
  //   imgSrc:"https://m.media-amazon.com/images/I/815cTnwmM2L._AC_SL1500_.jpg",
  //   tags:["Viagem", "Tech"],
  //   website:"Amazon",
  //   brand: "Tomtoc"
  // },
  // {
  //   name:"Necessaire para pendurar",
  //   link:"https://www.tf.com.br/necessaire-viagem-minerionico/p",
  //   imgSrc:"https://trackfield.vtexassets.com/arquivos/ids/471684-1200-1677?v=638996051337570000&width=1200&height=1677&aspect=true",
  //   tags:["Viagem"],
  //   website:"Amazon",
  //   brand: "Track and Field"
  // },
  // {
  //   name:"Escova de dentes elétrica",
  //   link:"https://a.co/d/0e8rwq6j",
  //   imgSrc:"https://m.media-amazon.com/images/I/61OnBNYhpBS._AC_SL1500_.jpg",
  //   tags:["Viagem", "Tech"],
  //   website:"Amazon EUA",
  //   brand: "Philips"
  // },
  // {
  //   name:"Adaptador de fone para avião",
  //   link:"https://amzn.to/4o7e62s",
  //   imgSrc:"https://m.media-amazon.com/images/I/51FKeocCBiL._AC_SL1500_.jpg",
  //   tags:["Viagem", "Tech"],
  //   website:"Amazon",
  //   brand: "Amazon"
  // },
  // {
  //   name:"Curvador de cílios compacto",
  //   link:"https://amzn.to/4fR1Fp5",
  //   imgSrc:"https://m.media-amazon.com/images/I/51ZUFK8ezNL._AC_SL1500_.jpg",
  //   tags:["Viagem"],
  //   website:"Amazon",
  //   brand: "Amazon"
  // },
  // {
  //   name:"Case inteligente para iPad",
  //   link:"https://amzn.to/4u8UNae",
  //   imgSrc:"https://m.media-amazon.com/images/I/71QYmoKTKTL._AC_SL1500_.jpg",
  //   tags:["Tech"],
  //   website:"Amazon",
  //   brand: "MoKo"
  // },
  // {
  //   name:"Carregador portátil nano",
  //   link:"https://amzn.to/3RCQR45",
  //   imgSrc:"https://m.media-amazon.com/images/I/61TAhURSqhL._AC_SL1500_.jpg",
  //   tags:["Tech", "Viagem"],
  //   website:"Amazon",
  //   brand: "Anker"
  // },
  // {
  //   name:"Bolsa de ombro",
  //   link:"https://amzn.to/3RPKx9p",
  //   imgSrc:"https://m.media-amazon.com/images/I/81QHOOmevPL._AC_SX679_.jpg",
  //   tags:["Bolsas"],
  //   website:"Amazon",
  //   brand: "Baggu"
  // },
  // {
  //   name:"Capa para notebook",
  //   link:"https://amzn.to/4uLiSF6",
  //   imgSrc:"https://m.media-amazon.com/images/I/81FVwdOZEYL._AC_SL1500_.jpg",
  //   tags:["Tech"],
  //   website:"Amazon",
  //   brand: "Tomtoc"
  // },
  // {
  //   name:"Organizador para roupas",
  //   link:"https://amzn.to/4oj1UM6",
  //   imgSrc:"https://m.media-amazon.com/images/I/71PdQXX3cmL._AC_SL1200_.jpg",
  //   tags:["Viagem", "Organização"],
  //   website:"Amazon",
  //   brand: "Curtlo"
  // },
  // {
  //   name:"Kit com 3 necessaires Hello Kitty",
  //   link:"https://amzn.to/4ozxllj",
  //   imgSrc:"https://m.media-amazon.com/images/I/81GkkyE0fhL._AC_SL1500_.jpg",
  //   tags:["Bolsas", "Organização"],
  //   website:"Amazon",
  //   brand: "Baggu"
  // },
  {
    name: "Organizador com compressão",
    link: "https://s.click.aliexpress.com/e/_c41UO7nn",
    imgSrc:
      "https://ae-pic-a1.aliexpress-media.com/kf/S12a7dc278f23450cae14cda36676591cy.png_960x960.png_.avif",
    tags: ["Aliexpress"],
    website: "Aliexpress",
    brand: "Bagsmart",
  },
  {
    name: "Template pra viagem!",
    link: "https://calico-fine-063.notion.site/Template-viagem-M-s-2026-a622a699b5938388ab04810babcbf999",
    imgSrc:
      "https://svgstack.com/media/img/white-notion-logo-1hgF386075.webp",
    tags: ["Aliexpress"],
    website: "Notion",
    brand: "Notion",
  },
];
