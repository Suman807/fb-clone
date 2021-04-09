import React from 'react';
import Story from './Story';
import "./StoryReel.css";
function StoryReel() {
    return (
        <div className="StoryReel" >
            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzffLJfhRn_dw-_9H3QhmZ4uBYWvKr6f2tA&usqp=CAU"
            profilesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpdzso9YcOmRWvZ67F9lsVA7lEX0rpOdYpg&usqp=CAU"
            title="Tanjiro"
            />
            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0O_8Pflk4wkXMq83szqvcMS7kUfa2CjSmA&usqp=CAU"
            profilesrc="https://9tailedkitsune.com/wp-content/uploads/2020/10/jujutsukaisen.jpg"
            title="Itadori Yuuji"
            />
            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2bkF0vWca88cKYqB2Dx9ZPpdV3laOxVVgg&usqp=CAU"
            profilesrc="https://i.pinimg.com/originals/54/5b/d6/545bd626972e7cfa44e9db66e650c187.jpg"
            title="Nobara Kugisaki"
            />
            <Story image="https://static.toiimg.com/thumb/msid-56833673,width-1200,height-900,resizemode-4/.jpg"
            profilesrc="https://i.pinimg.com/736x/95/86/c3/9586c309fc9e49e282beb120559521cd.jpg"
            title="Goku"
            />
            <Story image="https://www.feedride.com/wp-content/uploads/2020/02/Sabat-vegeta-header-633x330.jpg"
            profilesrc="https://i1.sndcdn.com/artworks-000118701077-tvmk00-t500x500.jpg"
            title="Vegeta"
            />
        </div>
    )
}

export default StoryReel;
