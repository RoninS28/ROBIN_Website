import React, { useRef, useState, useEffect } from "react";
import ChatBot from 'react-simple-chatbot';
import './EVChatbot.css';



const EVChatbot = (props) => {
    return (
        <ChatBot
        steps={[
          {
            id: '1',
            message: 'Привет! Как тебя зовут?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: '{previousValue}, приятно познакомиться! Чем занимаешься?',
            trigger: '4',
          },



          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Я думал, ты обрабатываешь заказы или настраиваешь сервер.',
            trigger: '6',
          },
          {
            id: '6',
            user: true,
            trigger: '7',
          },
          {
            id: '7',
            message: 'А ты кем работаешь?',
            end: true,
          }

        ]}
      />
    );
} 

export default EVChatbot;