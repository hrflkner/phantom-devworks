import Header from './components/Header';
import Background from './components/Background';
import './css/globals.css';

function App() {
    return (
        <div className="App">
            <Header />
            <section className="blurb">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolorum voluptas et quasi nam laboriosam illum soluta ab
                    placeat sint beatae iure sequi, quidem voluptates, alias
                    officia vel saepe at dolores molestias possimus quis
                    dignissimos! Officia, quasi sapiente. In corrupti similique
                    labore perferendis quas eaque molestias voluptates
                    blanditiis! Velit mollitia deserunt iure, voluptates
                    voluptate harum laboriosam voluptatem consequuntur neque
                    excepturi illo. Quisquam odio laborum ratione molestias enim
                    distinctio tenetur, quis aperiam amet, iure maiores
                    perspiciatis, recusandae consectetur perferendis delectus et
                    repellat velit consequatur accusantium in! Dolor error eius
                    minus repellendus maiores! Quisquam recusandae, quasi
                    corporis asperiores animi quo quod autem obcaecati.
                </p>
            </section>
            <Background />
        </div>
    );
}

export default App;
