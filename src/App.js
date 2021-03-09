import { Article } from './article'
import './App.css';

function App() {


  return (
    <div className="App">
      <Article 
        title="Don't think pandemic is over, Whitty warns"
        subtitle="Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says."
        date={Date.now() - 1000 * 60 * 60 * 2.1}
        category="Health"
        comments={true}
        imgAlt="Stop the Spread - Coronavirus image"
        imgSrc="article1.png"
      />

      <Article 
        title="Pay rise was set to be 2.1% - NHS chief"
        subtitle="NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers."
        date={Date.now() - 1000 * 60 * 60 * 1.1}
        category="UK Politics"
        comments={false}
        imgAlt="Nurse administering vaccine"
        imgSrc="article2.png"
      />

      <Article 
        title="Chartiy criticises Morgan's comments about Meghan"
        subtitle='Mental health charity Mind says it is "disappointed" by comments Piers Morgan made on Monday.'
        date={Date.now() - 1000 * 60 * 60 * 2.1}
        category="Entertainment & Arts"
        comments={false}
        imgAlt="Split image of Piers Morgan and Meghan Markhal"
        imgSrc="article3.png"
      />

      <Article 
        title="Unilevel drops word 'normal' from  beauty products"
        subtitle="The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity."
        date={Date.now() - 1000 * 60 * 10.5}
        category="Business"
        comments={false}
        imgAlt="Woman washing her face in a bathroom"
        imgSrc="article4.png"
      />
    </div>
  );
}

export default App;
