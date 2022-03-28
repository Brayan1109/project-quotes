import '../style/card.css'
import data from '../data/data.json'
import React, { useState } from 'react';
import arrow from '../img/arrow.png'

const background = () =>{

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    return {
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 0.5)`
    }
}


function Card(){

    let seends = Math.floor(Math.random()*(data.quotes.length - 1));
    const [{quote, author}, setQuote] = useState(data.quotes[seends]);
    // let quote = data.quotes[indexQuote];
    console.log(seends)

    function nextQuote(){
        setQuote({
            quote: data.quotes[seends].quote,
            author: data.quotes[seends].author
        })
    }

    console.log(data.quotes[seends])
    console.log(quote)
    console.log(author)
        
    return(
        <section className='section-lg' style={background()}>
            <div className="card">
                <blockquote className='quote'>{quote}</blockquote>
                <button className='button' onClick={nextQuote}> <img src={arrow} alt="Arrow img"/> </button>
                <h4 className='title'><i>{author}</i></h4>
            </div>
        </section>
    )
}

export default Card;