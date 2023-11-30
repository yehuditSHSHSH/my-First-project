import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);








// חובה להחזיר אלמט עוטף יחיד
// חובה לסגור תגיות ב JSX
// class attribute change to className
// for attribute chaNGE TO htmlFor
// properties & attributes change to camleCase


// const elements = <>
//       <label htmlFor="name">Enter Name</label>
//       <input id="name" onChange={()=>{}}/>
// </>

// const text = 'React Course'

// function calculate(x: number, y: number) {
//     return x * y
// }

// type Props = {
//     text: string;
//     name: string;
// }

// function Display(props: Props) {
//     return <h1>{props.name}</h1>
// }

// const element = <>
//     <div>{calculate(5, 10)}</div>
//     <div>{calculate(785, 10)}</div>
//     <div>{calculate(5, 88)}</div>
//     <div>{calculate(5, 10)}</div>
//     <Display text={text} name='aaa' />
//     <h1>{text}</h1>
// </>