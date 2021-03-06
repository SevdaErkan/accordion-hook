import "./styles.css";
import data from "./data";
import { useState } from "react";
import SingleQuestion from "./components/SingleQuestiion";

export default function App() {
   const [questions, setQuestions] = useState(data);

   return (
      <main>
         <div className="container">
            <h3>Questions and answers about login</h3>
            <section className="info">
               {questions.map((q) => {
                  return <SingleQuestion key={q.id} {...q} />;
               })}
            </section>
         </div>
      </main>
   );
}
