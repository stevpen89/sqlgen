import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={
      thumbs: '["no image","no image","no image","no image"]',
      price1: 38.99,
      shipping1: 3.99,
      sale1: 29.99,
      price2:0,
      shipping2:0,
      sale2:0,
      inputs1: '["name","mission","service dates","scripture"]',
      inputs2:'["","","",""]',
      sqlArray1:[],
      sqlArray2:[],
      sqlArray3:[],
      sqlArray4:[],
      statesArray1:[
        'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Florida','Georgia','Hawaii',
        'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maryland','Massachussetts','Michigan',
        'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
        'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','South Carolina',
        'South Dakota','Tennessee','Texas','Utah','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],

      statesArray2:[
        'Alabama','Alaska','Arizona','Arkansas','California','California','Colorado','Connecticut','Florida','Georgia',
        'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maryland','Massachussetts','Michigan',
        'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
        'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','South Carolina','South Dakota',
        'Tennessee','Texas','Utah','Utah','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],

      countriesArray: ['Albania', 'Angola', 'Argentina', 'Armenia', 'Australia', 'Barbados', 'Belgium', 'Benin', 'Bolivia',
       'Botswana', 'Brazil', 'Bulgaria', 'Cambodia', 'Canada', 'Cape Verde', 'Chile', 'China', 'Colombia', 'Costa Rica',
        'Cote Divoire Ivory Coast', 'Croatia', 'Czech', 'Democratic Republic of the Congo', 'Dominican Republic', 'Ecuador',
        'El Salvador', 'England', 'Fiji', 'Finland', 'France', 'Germany', 'Ghana', 'Greece', 'Guatemala', 'Haiti', 'Honduras',
        'Hungary', 'India', 'Indonesia', 'Ireland', 'Italy', 'Jamaica', 'Japan', 'Kenya', 'Korea', 'Liberia', 'Madagascar',
        'Marshall Islands', 'Mexico', 'Micronesia', 'Mongolia', 'Mozambique', 'Netherlands', 'New Zealand', 'Nicaragua',
        'Nigeria', 'Norway', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico',
        'Republic of Congo', 'Romania', 'Russia', 'Samoa', 'Scotland', 'Sierra Leone', 'Singapore', 'Slovenia',
        'South Africa', 'Spain', 'Sweden', 'Switzerland', 'Tahiti', 'Taiwan', 'Thailand', 'Tonga', 'Trinidad', 'Uganda',
        'Ukraine', 'Uruguay', 'Vanuatu', 'Venezuela', 'Vietnam', 'Zambia', 'Zimbabwe'],
        genJournalsArray:[
          'Complete World Map',
          'Footsteps',
          'Name Tag Elder',
          'Name Tag Sister',
          'Name Tag With Scripture',
          'Preach The Gospel',
          'Salt Lake Temple',
          'Shepherd',
          'Tree',
          'World Map Country Outlines',
          'World Map Silhouette',
          'Wreath 1',
          'Wreath 2',
          'Wreath 3',
          'Wreath 4'
        ],
        floralUrlArray: [
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Alabama_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Alaska_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Arizona_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Arkansas_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/California_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Colorado_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Connecticut_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Florida_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Georgia_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Hawaii_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Idaho_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Illinois_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Indiana_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Iowa_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Kansas_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Kentucky_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Louisiana_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Maryland_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Massachusetts_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Michigan_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Minnesota_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Mississippi_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Missouri_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Montana_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Nebraska_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Nevada_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/New%20Hampshire_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/New%20Jersey_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/New%20Mexico_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/New%20York_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/North%20Carolina_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/North%20Dakota_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Ohio_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Oklahoma_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Oregon_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Pennsylvania_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/South%20Carolina_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/South%20Dakota_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Tennessee_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Texas_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Utah_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Virginia_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Washington_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/West%20Virginia_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Wisconsin_Flowers.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_flowers/Wyoming_Flowers.jpg"
      ],
      natureUrlArray:[
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Alabama_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Alaska_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Arizona_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Arkansas_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/California_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/California_Nature_Beach.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Colorado_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Connecticut_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Florida_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Georgia_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Hawaii_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Idaho_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Illinois_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Indiana_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Iowa_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Kansas_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Kentucky_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Louisiana_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Maryland_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Massachusetts.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Michigan_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Minnesota_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Mississippi_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Missouri_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Montana_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Nebraska_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Nevada_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/New%20Hampshire_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/New%20Jersey_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/New%20Mexico_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/New%20York_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/North%20Carolina_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/North%20Dakota_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Ohio_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Oklahoma.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Oregon_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Pennsylvania_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/South%20Carolina_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/South%20Dakota_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Tennessee_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Texas_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Utah_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Utah_Nature_Moab.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Virginia_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Washington_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/West%20Virginia_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Wisconsin_Nature.jpg",
        "https://s3.us-west-1.amazonaws.com/parchmentgoods/product-images/journal_state_nature/Wyoming_Nature.jpg"
      ],
      countriesUrlArray:[
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Albania.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Angola.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Argentina.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Armenia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Australia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Barbados.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Belgium.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Benin.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Bolivia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Botswana.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Brazil.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Bulgaria.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Cambodia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Canada.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Cape_Verde.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Chile.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/China.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Colombia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Costa_Rica.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Cote_divoire_Ivory_Coast.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Croatia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Czech.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Democratic_Republic_of_the_Congo.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Dominican_Republic.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Ecuador.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/El_Salvador.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/England.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Fiji.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Finland.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/France.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Germany.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Ghana.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Greece.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Guatemala.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Haiti.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Honduras.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Hungary.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/India.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Indonesia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Ireland.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Italy.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Jamaica.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Japan.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Kenya.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Korea.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Liberia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Madagascar.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Marshall_Islands.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Mexico.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Micronesia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Mongolia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Mozambique.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Netherlands.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/New_Zealand.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Nicaragua.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Nigeria.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Norway.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Panama.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Papua_New_Guinea.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Paraguay.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Peru.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Philippines.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Poland.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Portugal.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Puerto_Rico.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Republic_of_Congo.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Romania.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Russia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Samoa.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Scotland.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Sierra_Leone.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Singapore.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Slovenia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/South_Africa.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Spain.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Sweden.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Switzerland.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Tahiti.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Taiwan.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Thailand.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Tonga.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Trinidad.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Uganda.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Ukraine.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Uruguay.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Vanuatu.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Venezuela.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Vietnam.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Zambia.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_country_outline/Zimbabwe.jpg'

      ],
      genJournalsUrlArray:[
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Complete_World_Map.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Footsteps.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Name_Tag_Elder.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Name_Tag_Sister.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Name_Tag_With_Scripture.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Preach_The_Gospel.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Salt_Lake_Temple.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Shepherd.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Tree.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/World_Map_Country_Outlines.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/World_Map_Silhouette.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Wreath_1.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Wreath_2.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Wreath_3.jpg',
        'https://s3-us-west-1.amazonaws.com/parchmentgoods/product-images/journal_mission_generic/Wreath_4.jpg' 
      ]
    }
  }

  generateSeed1(){
    const {inputs1,sale1,statesArray1,shipping1,price1,thumbs,floralUrlArray} = this.state
    let tempArr = floralUrlArray.map((x,y)=>{
      return `INSERT INTO products (product_name, product_tags, product_image, product_thumbs, product_desc, product_type, product_price, product_shipping, product_sale, o1)VALUES('Floral ${statesArray1[y]} Journal','{"tags":["journal","leather","missionary","state","${(statesArray1[y].toLowerCase())}","flowers"]}','${x}','{"thumbnails":${thumbs}}','Personalized Missionary Journal','journal',${price1},${shipping1},${sale1},'${inputs1}');`
   })
   this.setState({sqlArray1:tempArr})
  }

  generateSeed2(){
    const {inputs1,sale1,statesArray2,shipping1,price1,thumbs,natureUrlArray} = this.state
    let tempArr = natureUrlArray.map((x,y)=>{
      return `INSERT INTO products (product_name, product_tags, product_image, product_thumbs, product_desc, product_type, product_price, product_shipping, product_sale, o1)VALUES('Scenic ${statesArray2[y]} Journal','{"tags":["journal","leather","missionary","state","${(statesArray2[y].toLowerCase())}","nature","trees","mountain"]}','${x}','{"thumbnails":${thumbs}}','Personalized Missionary Journal','journal',${price1},${shipping1},${sale1},'${inputs1}');`
   })
   this.setState({sqlArray2:tempArr})
  }

  generateSeed3(){
    const {inputs1,sale1,countriesArray,shipping1,price1,thumbs,countriesUrlArray} = this.state
    let tempArr = countriesUrlArray.map((x,y)=>{
      return `INSERT INTO products (product_name, product_tags, product_image, product_thumbs, product_desc, product_type, product_price, product_shipping, product_sale, o1)VALUES('${countriesArray[y]} Outline Journal','{"tags":["journal","leather","missionary","country","${(countriesArray[y].toLowerCase())}","outline","map","world"]}','${x}','{"thumbnails":${thumbs}}','Personalized Missionary Journal','journal',${price1},${shipping1},${sale1},'${inputs1}');`
    })
    this.setState({sqlArray3:tempArr})
  }

  generateSeed4(){
    const {inputs1,sale1,genJournalsArray,shipping1,price1,thumbs,genJournalsUrlArray} = this.state
    let tempArr = genJournalsUrlArray.map((x,y)=>{
      return `INSERT INTO products (product_name, product_tags, product_image, product_thumbs, product_desc, product_type, product_price, product_shipping, product_sale, o1)VALUES('${genJournalsArray[y]} Outline Journal','{"tags":["journal","leather","missionary","country","${(genJournalsArray[y].toLowerCase())}","outline","map","world"]}','${x}','{"thumbnails":${thumbs}}','Personalized Missionary Journal','journal',${price1},${shipping1},${sale1},'${inputs1}');`
    })
    this.setState({sqlArray4:tempArr})
  }

  render() {
    const {sqlArray1,sqlArray2,sqlArray3,sqlArray4} = this.state

    return (
      <div className="App">
      <button onClick={()=>this.generateSeed1()}>Generate Floral SQL</button>
        {sqlArray1 ? sqlArray1.map((x,y)=><div key={`taryn1${y}`}>{x}</div>):null}
      <button onClick={()=>this.generateSeed2()}>Generate Nature SQL</button>
        {sqlArray2 ? sqlArray2.map((x,y)=><div key={`taryn2${y}`}>{x}</div>):null}
      <button onClick={()=>this.generateSeed3()}>Generate Country SQL</button>
        {sqlArray3 ? sqlArray3.map((x,y)=><div key={`taryn3${y}`}>{x}</div>):null}
      <button onClick={()=>this.generateSeed4()}>Generate General Journal SQL</button>
        {sqlArray4 ? sqlArray4.map((x,y)=><div key={`taryn4${y}`}>{x}</div>):null}
      </div>
    );
  }
}

export default App;
