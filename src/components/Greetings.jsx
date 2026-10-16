import './Greetings.css'
 
function Greentings({nome, mensagem = " Seja bem vindo(a)!"}) {
    return(
        <div className="greeting">
            <span className="greeting__eyebrow">React - Primeiros Passos</span>
            <h1>{nome},{mensagem}!</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis hic modi magni, accusantium fugit labore reiciendis magnam non, quisquam laudantium cumque, temporibus quaerat commodi deserunt. Explicabo maxime quos fugit vel!</p>
        </div>
    )
}
export default Greentings;