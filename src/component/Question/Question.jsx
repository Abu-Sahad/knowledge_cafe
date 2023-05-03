import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <div className="card">
                <div className='card-details'>
                    <h4><b>Props vs state?</b></h4>
                    <p><b>props:</b>
                        Props (short for properties) are used to pass data from a parent component to a child component. They are immutable, meaning that once they are set, they cannot be changed by the child component. Props are passed down the component tree, from parent to child, and are read-only by the child component. They are typically used to customize the appearance or behavior of a component. <br />
                        <b> state:</b>
                        On the other hand, state is utilized to control data inside a component. State is mutable, which means that the component itself can alter it. React will automatically re-render a component when its state changes, as well as any child components that rely on it. For information that may vary over time, such as user input, API responses, or UI interactions, state should be used.
                    </p>
                </div>
                <div className='card-details'>
                    <h4><b>How does useState work?</b></h4>
                    <p>Frist of all Import the useState hook and then,Call the useState hook with an initial value for the state variable. The hook returns an array with two elements: the current value of the state variable, and a function to update that value.then initializes the count state variable to 0 or emtry array.then creates a function called setCount that can be used to update the value of count.</p>
                </div>
                <div className='card-details'>
                    <h4><b>Purpose of useEffect other than fetching data.</b></h4>
                    <p>Although useEffect is frequently employed for data fetching, it also has the following additional use cases,
                        You can perform side effects in your components with the useEffect Hook. Timers, data fetching, and direct DOM updates are a few instances of side effects. Two arguments are accepted by useEffect. Optional: The second parameter.</p>
                </div>
                <div className='card-details'>
                    <h4><b>How Does React work?</b></h4>
                    <p>One of the most widely used JavaScript libraries for creating mobile and online applications is ReactJS. React, developed by Facebook, consists of components, which are reusable JavaScript code fragments used to design user interfaces (UI). The distinction between ReactJS and JavaScript frameworks must be made.
                        React also provides a number of tools and features to make it easier to build complex UIs. These include:
                        JSX: a syntax extension that allows you to write HTML-like code in your JavaScript files.
                        Props: a way to pass data and behavior down from parent components to child components.
                        State: a way to manage data and behavior within a component.
                        Hooks: a way to use state and other React features within functional components.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Question;