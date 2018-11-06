import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={
      thumbs: '["no image","no image","no image","no image"]',
      price: 38.99,
      shipping: 3.99,
      sale: 29.99,
      inputs1: '["name","mission","service dates","scripture"]',
      sqlArray1:[],
      sqlArray2:[],
      statesArray1:[
        'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maryland','Massachussetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','South Carolina','South Dakota','Tennessee','Texas','Utah','Virginia','Washington','West','Wisconsin','Wyoming'],
      statesArray2:[
        'Alabama','Alaska','Arizona','Arkansas','California','California','Colorado','Connecticut','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maryland','Massachussetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','South Carolina','South Dakota','Tennessee','Texas','Utah','Utah','Virginia','Washington','West','Wisconsin','Wyoming'],
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
      ]
    }
  }

  generateSeed1(){
    const {inputs1,sale,statesArray1,shipping,price,thumbs,floralUrlArray} = this.state
    let tempArr = floralUrlArray.map((x,y)=>{
      return `INSERT INTO products (product_name, product_tags, product_image, product_thumbs, product_desc, product_type, product_price, product_shipping, product_sale, o1)VALUES('Floral ${statesArray1[y]} Journal','{"tags":["journal","leather","missionary","state","${(statesArray1[y].toLowerCase())}","flowers"]}','${x}','{"thumbnails":${thumbs}}','Personalized Missionary Journal','Journal',${price},${shipping},${sale},'${inputs1}');`
   })
   this.setState({sqlArray1:tempArr})
  }

  generateSeed2(){
    const {inputs1,sale,statesArray2,shipping,price,thumbs,natureUrlArray} = this.state
    let tempArr = natureUrlArray.map((x,y)=>{
      return `INSERT INTO products (product_name, product_tags, product_image, product_thumbs, product_desc, product_type, product_price, product_shipping, product_sale, o1)VALUES('Scenic ${statesArray2[y]} Journal','{"tags":["journal","leather","missionary","state","${(statesArray2[y].toLowerCase())}","nature","trees","mountain"]}','${x}','{"thumbnails":${thumbs}}','Personalized Missionary Journal','Journal',${price},${shipping},${sale},'${inputs1}');`
   })
   this.setState({sqlArray2:tempArr})
  }

  render() {
    const {sqlArray1,sqlArray2} = this.state

    return (
      <div className="App">
      <button onClick={()=>this.generateSeed1()}>Generate Floral SQL</button>
        {sqlArray1 ? sqlArray1.map((x,y)=><div key={`taryn${y}`}>{x}</div>):null}
      <button onClick={()=>this.generateSeed2()}>Generate Nature SQL</button>
        {sqlArray2 ? sqlArray2.map((x,y)=><div key={`taryn${y}`}>{x}</div>):null}
      </div>
    );
  }
}

export default App;
