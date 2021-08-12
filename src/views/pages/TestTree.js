import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import Treemap from './Treemap';

export default function TestTree(props) {

  const [cart, setCart] = useState([]);
  const [interestData, setInterestData] = useState(data);

  const cartAdd = (item) => {
    setCart(cartItem => {
      if(!itemExists(cartItem, item.name)) {
        return [...cartItem, item];
      }
      else {
        // alert('already added to cart.');
        return [...cartItem]
      }
    });
  }

  const itemExists = (arr, name) => {
    return arr.some((el) => {
      return el.name === name;
    }); 
  }

  useEffect(()=>{
    console.log(cart);
  },[cart]);

    return (
      <div>
        <div style={{padding: "50px 15px 0"}}>
      <Treemap data={interestData} addToCart={cartAdd}/>
      </div>
      <div>
      <div style={{padding: "30px"}}><pre style={{background: "#eee", padding:"15px", fontSize: "14px"}}>{JSON.stringify(cart, null, 2) }</pre></div>
        </div>
      </div>
    );
  }





  var data = [
    {
        "name": "Entertainment",
        "audience_size": 120493,
        "affinity": 18293,
        "ri": 32.6,
        "children": [
            {
                "name": "Movies",
                "audience_size": 11757,
                "affinity": 1200,
                "ri": 12.6
            },
            {
                "name": "Music",
                "audience_size": 54886,
                "affinity": 400,
                "ri": 14.6
            },
            {
                "name": "Series",
                "audience_size": 581,
                "affinity": 900,
                "ri": 19.6
            },
            {
                "name": "Comedy Show",
                "audience_size": 51295,
                "affinity": 1498,
                "ri": 12.7
            }
        ]
    },
    {
        "name": "Sports",
        "audience_size": 150032,
        "affinity": 15829,
        "ri": 31.6,
        "children": [
            {
                "name": "Running",
                "audience_size": 51000,
                "affinity": 1938,
                "ri": 22.7
            },
            {
                "name": "Long Jump",
                "audience_size": 24023,
                "affinity": 349,
                "ri": 21.3
            },
            {
                "name": "High Jump",
                "audience_size": 74839,
                "affinity": 928,
                "ri": 18.7
            }
        ]
    },
    {
        "name": "Learning",
        "audience_size": 231034,
        "affinity": 17239,
        "ri": 11.6,
        "children": [
            {
                "name": "Books",
                "audience_size": 5000,
                "affinity": 1200,
                "ri": 11.5
            },
            {
                "name": "Videos",
                "audience_size": 12000,
                "affinity": 1243,
                "ri": 8.7
            },
            {
                "name": "Audio Tape",
                "audience_size": 45000,
                "affinity": 1547,
                "ri": 25.9
            }
        ]
    },
    {
        "name": "Studio",
        "children": [
            {
                "name": "Production",
                "audience_size": 1000,
                "affinity": 1728,
                "ri": 22.5
            },
            {
                "name": "Animation",
                "audience_size": 2300,
                "affinity": 1378,
                "ri": 12.9
            },
            {
                "name": "Direction",
                "audience_size": 4500,
                "affinity": 1938,
                "ri": 17.4
            }
        ]
    }
  ]


