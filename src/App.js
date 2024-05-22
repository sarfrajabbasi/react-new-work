import React, { Component } from "react";
import "./App.css";
// import UserGreeting from './component/ConditionalRendering';
// import ParentComponent from './component/MethodsAsProps';
// import EventBind from './component/eventHanderBind';
// import ClickMeClass  from './component/eventhandling';
// import NameList from './component/listRandering';
// import Welcome from './component/classComponent';
// import Greetings from './component/funcComponent';
// import {Hello} from './component/JSXme'
// import MyName,{Hola} from './component/prop';
// import Counter from './component/setState';
// import Message from './component/state';
// import MyList from './component/indexAsKey';
// import StyleSheets from './component/styleSheets';
// import styles from "../src/appStyles.module.css";
// import "./component/style/style.css"
// import Form from './component/Form';
// import LifeCycleA from './component/lifeCycleA';
// import Fragment from './component/fragment/fragment';
// import Table from './component/fragment/Table';
// import Table from './component/fragment/Table';
// import ParentComponent from './component/ParentComponents';
// import Memo from './component/MemoComp.js';
// import Refs from './component/refs/Refs'
// import Focusinput from './component/refs/Focusinput'
// import FRParentInput from './component/refs/FRParentInput.js'
// import PortalDemo from './component/refs/PortalDemo.js';
// import ErrorBoundary from "./component/ErrorBoundary.js";
// import Hero from "./component/Hero.js";
// import ClickCounter from "./component/HigherOrder/ClickCounter.js";
// 
// import HoverCounter from "./component/HigherOrder/HoverCounter.js";
// import ClickCounterTwo from "./component/HigherOrder/ClickCounterTwo.js";
// import HoverCounterTwo from "./component/HigherOrder/HoverCounterTwo.js";
// import User from "./component/HigherOrder/User.js";
// import Counter from "./component/HigherOrder/Counter.js";
import ComponentC from './component/context/ComponentC.js'
function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>success</h1> */}

      {/* <h1 >Hello world</h1> */}
      {/* <HelloWrold></HelloWrold> */}
      {/* <Greetings name= "sarfraj"></Greetings> */}
      {/* <Welcome></Welcome> */}
      {/* <Hello></Hello> */}
      {/* <MyName name='sarfraj'>
      <p>holla</p>
     </MyName>
     <MyName name='jolly'>
      <button>Hello</button>
     </MyName>
     <MyName name='ruby'>
      <p>time is pass like water</p>
     </MyName>
     <Hola name="goldy"></Hola>
     <Message name ="sarfraj" ></Message> */}
      {/* <Counter></Counter> */}
      {/* <ClickMe></ClickMe> */}
      {/* <ClickMeClass></ClickMeClass> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <MyList></MyList> */}
      {/* <StyleSheets primaryno ={true}></StyleSheets> */}
      {/* <Form></Form> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <Fragment></Fragment> */}
      {/* <Table></Table> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Refs></Refs> */}
      {/* <Focusinput></Focusinput> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <PortalDemo></PortalDemo> */}

      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Spiderman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="joker"></Hero>
      </ErrorBoundary>
      <ClickCounter name = "sarfraj"></ClickCounter>
      <HoverCounter></HoverCounter> */}
      {/* <ClickCounterTwo></ClickCounterTwo> */}
      {/* <HoverCounterTwo></HoverCounterTwo> */}
      {/* <User render= {(isLoggedIn)=>  isLoggedIn ? 'sarfraj' :'Guest'}></User> */}
       {/* <Counter render={(count,incrementCount)=> <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo> }>
      </Counter>
      <Counter render={(count,incrementCount)=> <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo> }>
      </Counter>  */}
{/* 
      <Counter>
        {
        (count,incrementCount)=> (<ClickCounterTwo></ClickCounterTwo> count={count} incrementCount={incrementCount})
        }
        </Counter>

        <Counter>
        {
        (count,incrementCount)=> (<HoverCounterTwo></HoverCounterTwo> count={count} incrementCount={incrementCount})
        }
        </Counter> */}

        {/* -------------context--------------- */}
         <ComponentC></ComponentC>
        {/* -------------XXX--------------- */}
        
    </div>
  );
}

export default App;

/*   */