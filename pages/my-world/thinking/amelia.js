import React from "react";
import { NextSeo } from "next-seo";
import AppBar from "../../../components/atoms/AppBar";
import BreadCrumb from "../../../components/atoms/BreadCrumb";
import CaseHeader from "../../../components/molecules/CaseHeader";
import Footer from "../../../components/molecules/Footer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Quote from "../../../components/atoms/Quote";

export default function Amelia() {
  return (
    <div className="global-wrapper">
      <NextSeo
        title="amélia - danilo leal"
        canonical="https://daniloleal.co/my-world/thinking/amelia"
        openGraph={{
          url: "https://daniloleal.co/my-world/thinking/amelia",
          title: "amélia - danilo leal",
          images: [
            {
              url: "https://i.ibb.co/LYLCjdP/amelia.png",
              alt: "amélia - danilo leal",
              width: 1280,
              height: 720,
            },
          ],
        }}
      />
      <AppBar goBackTo="/my-world/thinking" />
      <div className="default-container">
        <BreadCrumb
          pathNameOne="Home /"
          goToOne="/"
          pathNameTwo="My world /"
          goToTwo="/my-world"
          pathNameThree="Thinking /"
          goToThree="/my-world/thinking"
          pathNameFour="Amélia"
        />
        <CaseHeader title="Amélia" summary="PT-BR • Posted at 31/12/2020" />
      </div>
      <div className="default-container">
        <p className="paragraph-1">
          Desde pequeno, gosto muito de Hermes e Renato. Se você não conhece, o
          que é difícil, se trata do melhor grupo de comédia do Brasil, na minha
          opinião. E a partir de 2006 eles começaram uma novela chamada Sinha
          Boça, que era sobre o Boça, um dos personagens, se não o, mais
          icônicos do grupo. É um retrato de uma pessoa já "adulta" que sempre
          foi tratado com um certo mimo e protecionismo excessivo que,
          consequentemente, acabou ficando grande só de corpo mas infantil de
          cabeça. A série sempre brinca apontando que ele é um menino "criado
          pela vó". <br />
          <br />
          A vó Lurdes, apesar de muitas das brincadeiras, posso dizer que é um
          retrato da figura de avó. É uma senhora que cuida muito do neto,
          protege com muito carinho, deseja o bem incansavelmente e vive uma
          vida calma e caseira. E o Boça, apesar de sofrer as consequências
          dessa criação, é um neto que ama incondicionalmente sua avó. Tem nela
          o que entende por família e se orgulha de ser criado por ela. Tudo
          isso porque a vó Lurdes, de alguma forma, me faz pensar na minha avó,
          a vó Amélia. Ou Dona Amélia.
          <br />
          <br />
          Não tive muito contato com meus avôs paternos. Apesar de sempre pensar
          neles com muito carinho, por morarem muito longe, nos relacionamos
          muito pouco. O meu avô materno, por outro lado, faleceu muito antes do
          meu nascimento, então só o conheci por fotos que pareciam de séculos
          atrás e por histórias ali e aqui contadas pela minha avó, que sempre
          sentiu sua ausência, e por minha mãe. Minha avó é o que eu sempre
          considerei como minha verdadeira família para além de pais e irmãos.
          Era minha maior e única conexão com minha família materna.
          <br />
          <br />
          Minha avó teve 5 filhos, incluindo minha mãe, a caçula. Talvez por
          conta disso, e por muitas outras coisas, minha avó sempre esteve mais
          próxima da minha mãe. E consequentemente, de mim. Acredito que fui o
          neto que ela mais acompanhou. Temos fotos juntos desde que era muito
          pequeno e ela lembrava de vários momentos da minha vida. <br />
          <br />
          Há muitos anos, minha avó tinha uma audição comprometida. Isso no
          começo era motivo de várias risadas porque frequentemente a gente
          perguntava se ela havia escutado x e ela respondia "você está falando
          de y?" sendo y um assunto completamente aleatório e distante do que
          estávamos falando. E ela sempre foi assustadoramente lúcida. Quando eu
          nasci, minha avó já era "idosa", ela já tinha 72 anos e, mesmo nessa
          idade, a mente estava intacta. Era uma leitora assídua, devorara
          livros, revistas, qualquer coisa que tinha pra ler. Durante a década
          de 2000-2010 minha avó ainda era muito ativa fisicamente, era bastante
          independente. Então era frequente ela estar sempre por aí "batendo
          perna". <br />
          <br />
          Em 2011, ela sofreu a sua primeira fratura no fêmur e isso mudou tudo
          pra ela e para nossa família. Sua independência física ficou muito
          comprometida e dali pra frente se reduziu demais, minha mãe
          desenvolveu um receio e preocupação latente com medo de uma nova e
          mais severa queda. E eu, minha irmã e meu pai nos tornamos,
          naturalmente, pequenos vigias, sempre vendo o que minha avó ia fazer,
          para ela não tropeçar, cair e sofrer um novo acidente complicado.{" "}
          <br />
          <br />
          Toda vez que íamos sair com ela, era comum, devido sua audição ruim,
          ficarmos gritando "cuidado com o degrau" enquanto andávamos mais
          devagar que tartarugas. E eu, por algum motivo, sempre fui mais
          paciente e não me incomodava, quando acontecia, de acompanha-la,
          segurar o braço dela, acompanhando ela a caminhar. <br />
          <br />
          Com essa redução na sua mobilidade, minha avó manteve a lucidez na
          leitura. E também na escrita. Além de ler livros inteiros em um, dois
          dias, ela escrevia muito o que encontrava ser interessante, o que
          estava pensando e cartas para familiares. Minha família materna sempre
          esteve ao redor do Brasil, e muitos conhecidos e amigos da minha avó
          também. Ela sempre manteve o hábito de se comunicar por cartas então
          estava sempre escrevendo e pedindo pra gente enviar. Ela guardava o
          endereço e telefone de todas as pessoas importantes pra ela em agendas
          e surpreendentemente, entre várias delas, ela sempre encontrava os
          dados da pessoa com quem ela queria conversar. <br />
          <br />
          Era frequente chegar em casa e encontrar minha avó com algum pedaço de
          revista recortado: "Li isso, e lembrei de você. É uma receita
          vegetariana, você já fez essa?". As vezes eram recortes de coisas que
          ela sabia que eu gostava e guardava pra mim. As vezes eram mensagens e
          contos que ela queria que eu lesse porque achou interessante por ter
          alguma mensagem e significado bonito. <br />
          <br />
          Apesar de ser religiosa, minha avó era bastante inteligente, de certa
          maneira, emocionalmente. Ela lia muitos livros sobre
          auto-conhecimento, controle emocional, amor, etc. E em várias das
          mensagens que ela escrevia ela passava esse conhecimento. Fui
          acumulando muitos desses pequenos papéis, cartinhas, mensagens, que
          ela ia escrevendo ao longo dos anos. E eu acredito que todo esse
          hábito e exercício do pensamento foi o que a levou tão longe. <br />
          <br />
          Com sua independência reduzida e muitos de seus conhecidos espalhados
          pelo Brasil, minha avó foi ficando, naturalmente, mais carente. Sentia
          fala de se encontrar com as poucas amigas que ainda estavam vivas ou
          com os familiares que não via há muito. Ela conhecia muita gente,
          pessoas que não fazia idéia de quem eram. E ela sempre falava que
          gostaria de ver a pessoa x, que estava na cidade y. Sempre quis
          leva-la, em alguma oportunidade, para que ela encontrasse essas
          pessoas mas as questões logisticas de ter o carro e tempo, somadas da
          preocupação de viajar com ela e algo acontecer de saúde, nunca
          permitiram. <br />
          <br />
          Contudo, acredito que minha avó era uma das pessoas que mais sabia
          lidar com a solidão. E não em um sentido melancólico, mas realista.
          Ela exercitava a presença das pessoas nos pensamentos, no escrever,
          nas lembranças. Ela nunca esqueceu de ninguém, todo e qualquer membro
          da família ela conhecia e dedicava tempo dos seus pensamentos e
          orações. <br />
          <br />
          Havia muitas "pequenas" coisas que ela fazia que eu nunca vou me
          esquecer. Ela mantinha em uma agenda antiga a data de aniversário de
          todos os filhos, netos e bisnetos. Ao longo dos anos ela ia renovando
          a agenda mas a última parou em 2016. Então, desde 2016, ela usa a
          mesma agenda, para lembrar do aniversário de cada um. E não era para
          saber que dia ia cair e sim para ela "reforçar" as orações dela quando
          o dia chegasse. Em cada dia, ela escrevia uma oração e anotava
          "reforço 21/10/2017" ; "reforço 21/10/2018". E assim ela fazia com
          todos. E isso não era só nessa agenda, em vários papéis e lugares que
          ela anotava orações ela ia fazendo esses reforços. Alguns eram mais
          gerais, "para todos netos e filhos" e outros específicos "para pessoa
          x". <br />
          <br />
          Como ela morou grande parte da minha vida com minha família, sempre
          tentei quando pude entrete-la, para que essa imobilidade tão ruim para
          ela não pesasse tanto. E ela sempre foi muito grata por esses pequenos
          gestos. Já levei ela para ir ao cinema, só eu e ela, já fomos juntos
          em praças, caminhar, ver umas árvores. Íamos tomar sorvete aqui e ali.
          Sempre gostei de fazer esses pequenos passeios com a minha avó porque
          via o quanto era bom pra ela. Ela se distraía muito e cansava
          bastante. Como criança mesmo. Chegava em casa, comia e dormia depois
          de um dia de passeio. <br />
          <br />
          Para se distrair, enquanto sozinha, ela jogava muito dominó e baralho.
          Sozinha mesmo. As vezes era meio triste ver essa cena mas depois foi
          acostumando pois era de fato uma distração, pra ter as mãos ocupadas.
          Mas ainda assim, sempre notei que ela ficava feliz quando sentava para
          jogar com ela. Ela era muito boa e me ensinou a jogar buraco. talvez o
          único jogo de carta, entre outros que aprendi ao longo da vida que já
          esqueci como jogar, que nunca vou esquecer.
          <br />
          <br />
          Sempre que a via sentada, fazia massagem no ombro dela e reação era
          sempre a mesma "aí que gostoso". Ela flexibilizava todo o ombro e dava
          uma baita relaxada. Sentava ao lado dela depois e ela sempre agradecia
          falando que eu era um neto muito carinhoso. Acho que ela sempre gostou
          bastante de mim, me sinto muito feliz por isso. <br />
          <br />
          Outra coisa que a distraía muito era o tricô. Quando comprávamos
          agulhas novas e linhas novas, ela sentava e ficava o dia todo
          tricotando. Algumas horas após chegar com essas compras, ela já tinha
          uma meia, ou cachecol, ou tapete, pronto. E ao longo dos anos, ganhei
          muitas meinhas feitas de tricô dela. Ela fazia de vários tamanhos e de
          várias cores e sempre fazia para várias pessoas. Minha avó pensava em
          todo mundo. <br />
          <br />
          Outra consequência dessa imobilidade dela, natural até da idade
          também, era a ausência de grandes novidades. Há muito tempo não
          acontecia nada grandioso na vida dela e acredito que por conta disso
          ela lembrava muito do passado. Era um certo rito escutar as mesmas
          histórias repetidamente. Ela costumava falar de como conheceu meu avô,
          de como foi a vida pós o falecimento dele e ter que lidar com 5 filhos
          pequenos, mãe-solo. Costumava falar dos vários lugares no qual era
          morou, Santos, onde nasceu, Campinas, Águas de Lindóia e São Paulo.{" "}
          <br />
          <br />
          Uma das histórias que eu escutei muito era a do "sombra". Minha avó,
          quando jovem, era uma mulher muito bonita, que acredito que se
          destacava das demais. Ela sempre conta que foi cobiçada. O sombra era
          um rapaz com quem ela tinha tido um relacionamento breve mas que após
          o término não parou segui-la. Mesmo após ela ter conhecido meu avô,
          esse tal do "sombra" continuava na sombra dela. Até que ela pediu para
          meu avô dar um apavoro nele. Uma história esquisita mas marcante.{" "}
          <br />
          <br />
          Minha avô era uma mulher extremamente fiel. Poderia atribuir isso a
          sua forte religiosidade mas acredito que é para além disso. Pra mim,
          estaria mais ligado a um princípio dela mesmo. Sempre amou muito meu
          avô, apesar dele ter feito-a sofrer tanto. Sempre amou muito todos os
          filhos, também apesar de muitos e inúmeros conflitos e desigualdades
          de relação entre os 5. Sempre senti que havia um laço de sentimento,
          de amor, que ela tinha por todas as pessoas que era inquebrável,
          imbatível. <br />
          <br />
          Ela morou por muitos anos conosco e eu a tive muito presente em minha
          vida. Ela esteve presente em quase todos os momentos marcantes da
          minha vida, todos os aniversários, formaturas, pequenas celebrações.
          Ela sempre esteve lá. E apesar de ser bastante desafiador cuidar e
          lidar com a manutenção de vida de uma pessoa idosa, com muitas
          fragilidades, eu e minha família sempre fizemos o máximo, para além do
          que tínhamos condições para cuidar dela. <br />
          <br />
          Neste ano de 2020, saí da casa dos meus pais ao ter alugado meu
          próprio apartamento. Um dos meus maiores prazeres em ter conseguido
          sair da casa deles era poder "doar" meu quarto para minha avó. Um
          espaço maior do que o quarto que ela tinha, mais arejado, mais
          armários, onde ela podia fazer mais dela. Minha avó tinha muitas
          coisinhas. Os livros, os milhões de papéis, os pingentes e bijuterias
          que ela fazia, os tricôs, as fotos que ela guardava. <br />
          <br />
          As poucas vezes que frequentei a casa dos meus pais este ano por conta
          da pandemia, após ter me mudado, todas vezes ela agradecia por ter
          cedido o quarto. Ela se sentia mais acolhida e mais reservada. A vista
          do quarto é ótima e adorava pensar que ela podia ficar olhando para
          árvores, como eu adoro também. <br />
          <br />
          Enfim. Poderia escrever muitos mais sobre minha avó. No dia 29/12
          deste ano ela se foi. Foi um mês muito difícil para todo mas
          especialmente para ela, pois sofreu muito devido complicações de uma
          segunda queda, que resultou numa segunda fratura de fêmur. Ela tinha
          96 anos. E apesar de já ter uma idade surpreendente, ela sempre esteve
          muito lúcida. Apesar de problemas corriqueiros de saúde, uns mais
          preocupantes que outros, no geral, esteve sempre bem. Era frequente
          irmos a médicos com ela onde ela sempre relatava as muitas dores que
          sentia mas, no fim, os exames saiam todos ótimos. Isso nos deixava
          confusos mas, naturalmente, surpreendidos. Como pode aos 96 ela estar
          tão inteira assim.
          <br />
          <br />
          Acontece que nada dura pra sempre mesmo. A morte, incrivelmente, faz
          parte da vida. Mas, ainda, sinceramente, não conseguia imaginar minha
          vida sem ela. Ela sempre esteve por aqui. São inúmeras memórias,
          momentos. As pequenas grandes, gigantes, coisas que nunca esquecerei
          em relação a minha avó. Assim como Boça tinha orgulho de ser "criado
          pela vó", eu sempre tive orgulho de ser o neto carinhoso, que era
          cuidado por ela também.
          <br />
          <br />
          Sempre tive orgulho de usar as pulseiras, colares, roupas, meias, e
          tudo mais que ela fazia. Sempre fiz questão de mostrar pra ela que
          estava usando, queria que ela se sentisse querida e reconhecida. Desde
          2010 tenho um quadro dela no meu quarto. Uma foto em que eu era bebê
          ainda. Eu no carrinho e ela ao lado no sofá. Sempre mostrava pra ela,
          dizendo: "nunca te esqueço, vó, você está sempre aqui. Olha a foto que
          eu sempre guardo".
          <br />
          <br />
          E é isso, vó. Nunca vou te esquecer. Tenho milhares de lembranças e
          vou te carregar pra sempre. Sinto orgulho de poder ter cuidado de você
          e de ter te dado carinho. Sinto orgulho de ter tido uma avó presente
          como foi. Sei que tudo acaba, e você viveu por muito tempo, tempo que
          poucos viveram. Sua vida foi desafiadora mas ultimamente, foi uma vida
          cheia de sucessos.
          <br />
          <br />
          Seu tempo chegou, naturalmente. Estivemos com você durante todos esses
          últimos dias, nos esforçamos. E fico feliz em acreditar que sua
          partida, no fim, foi uma decisão sua. Acredito que você a fez quando
          sentiu que estava pronta. <br />
          <br />
          Vó, pra sempre comigo. Amo você, Eterna Dona Amélia.
        </p>
        <Quote
          quote={[
            "I’m going away",
            <br></br>,
            "Where the wind beats heavy on the sand",
            <br></br>,
            "Do you want to come with?",
          ]}
          link="https://www.youtube.com/watch?v=dxEgpPxIL14&ab_channel=StephenFretwell-Topic"
          linkString="Do You Want To Come With,"
          text="Stephen Fretwell"
        />
        <Zoom>
          <img
            className="img"
            src="https://i.ibb.co/TRrW1bL/Screen-Shot-2020-12-31-at-14-03-24.png"
            alt="Minha avó e Alfredo."
          />
        </Zoom>
        <div className="p-4 bg-gray-100 rounded-lg text-center dark:bg-black">
          <h2 className="h2">Amélia Branco Bontempo</h2>
          <p className="paragraph-1">13/04/1924 - 29/12/2020 - Pra sempre.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
