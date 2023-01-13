import React from "react";
import potager1 from ".././assets/potager1.jpg";
import potager2 from ".././assets/potager2.jpg";
import potager3 from ".././assets/potager3.jpg";
// import Slider from "../components/slider";
// import { SimpleSlider } from "../components/SimpleSlider";

const Home = () => {
  return (
    <section className="section">
      <h2>Accueil</h2>
      <div>
        {/* <SimpleSlider /> */}
        <div id="carouselExampleIndicators" class="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={potager1} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={potager2} className="d-block" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={potager3} className="d-block" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
        consequuntur officia earum laborum accusamus dolor animi deleniti nulla
        autem, perspiciatis omnis cum sint, nesciunt ut provident. Assumenda
        repellendus quia blanditiis nisi numquam nobis porro, aliquid animi
        expedita qui vel ab, velit autem nam sapiente! Dolor earum excepturi
        minus corrupti illum cumque porro pariatur. Ipsa dignissimos officia
        mollitia quasi nostrum nobis molestias eum a dicta, accusantium
        distinctio voluptatem ab inventore iste beatae itaque quo quisquam
        voluptate nemo sunt laudantium doloremque ducimus perspiciatis! Eius,
        unde odio? Magni fugit quam laborum necessitatibus accusamus libero vero
        asperiores aspernatur qui, corrupti quae esse quas, officia tenetur est
        sit. Esse dolore error est tenetur nisi nostrum quasi obcaecati magnam
        voluptatem deleniti voluptate aperiam inventore nam, vel ratione, ut
        cupiditate nihil, exercitationem veritatis. Totam expedita aperiam
        accusantium nisi incidunt ratione ab, blanditiis deleniti illum, itaque,
        vel sequi laboriosam velit! Et doloremque, dolore iusto sint quas sunt
        deserunt tempore nobis temporibus blanditiis optio numquam vel
        voluptates quidem. Saepe quo alias, eligendi dolore culpa obcaecati
        molestiae quae vero odio corrupti dolorum pariatur, quam, minima a
        libero et! Aliquam vel perferendis corrupti iste nesciunt? Error
        doloremque dignissimos, tenetur reiciendis ullam eveniet voluptatum!
        Officiis ratione error saepe. Quibusdam quaerat, reiciendis autem
        maiores ea pariatur fugit cupiditate ex ipsa? Dolor laudantium, a id
        magni, reiciendis dignissimos minus illum eius, autem eveniet adipisci
        doloribus animi aliquam velit odit quidem officiis totam quos quasi
        laborum illo tempore. Laudantium expedita suscipit assumenda nostrum
        voluptatum labore ipsam id quas, placeat ducimus eligendi sequi
        excepturi odit corrupti dolor? Doloremque voluptates, repellat
        laboriosam voluptatibus qui repudiandae beatae odit. Eius, similique
        voluptatum vero nesciunt nobis laboriosam, quam neque culpa fugit
        debitis sapiente autem distinctio iure sunt? Consequuntur animi
        reiciendis magnam voluptas quasi consequatur corporis ab dolorem soluta
        harum explicabo voluptatum corrupti impedit quaerat hic recusandae vel
        nostrum, obcaecati sed repudiandae quo, culpa cupiditate asperiores
        fugiat? Facere nisi fugit commodi possimus adipisci reiciendis officia
        quibusdam labore, saepe nihil blanditiis dignissimos! Quia modi eius
        libero? Et repellendus iste cum aspernatur praesentium soluta illo ut
        libero beatae delectus porro, nostrum eligendi dolore. Laudantium,
        dolorum ipsum, repellendus architecto quaerat optio accusamus, est
        pariatur odio mollitia alias provident molestias eius vitae blanditiis.
        Laborum explicabo exercitationem provident commodi voluptatum
        distinctio. Sequi voluptatibus ratione ut repudiandae? Doloribus totam
        fugiat eius, porro officia repudiandae provident accusamus harum
        corporis facilis nam, ut molestiae deleniti fuga qui aliquam itaque.
        Asperiores optio atque blanditiis itaque maiores saepe expedita libero
        hic eveniet. Illum itaque neque inventore omnis possimus nulla ad, odit
        iure nisi nam reprehenderit suscipit commodi labore laborum rerum
        asperiores ab iste quasi sunt optio pariatur. Laboriosam saepe officia
        neque dolore labore amet voluptates autem quos officiis asperiores, sunt
        assumenda porro at perferendis excepturi minus rem sed maiores cumque
        tenetur quisquam id? Voluptate, distinctio? Ducimus veritatis aut
        repellendus facere totam necessitatibus nemo reiciendis corrupti odio
        doloremque, dignissimos nihil itaque quia architecto facilis saepe in
        quasi! Dolorem fuga assumenda dolores fugiat dicta corporis id porro,
        atque corrupti, voluptatibus voluptas amet facere perspiciatis
        consectetur iste illum illo sit ipsa rerum? Voluptatibus facilis nulla
        quisquam, iure dignissimos adipisci animi consectetur voluptates
        reiciendis ea, excepturi laborum officiis non ex soluta quasi est quae
        magni ratione. Porro expedita quam non, veritatis minima possimus eos a
        cum nostrum totam alias, deleniti dolorem. Consequatur placeat eos
        quidem voluptate eum beatae nostrum necessitatibus illum provident
        debitis, atque dignissimos tempore rem? Iste sequi sint provident nobis
        illo officia deleniti neque debitis distinctio voluptate, ipsum
        asperiores dolore aperiam cupiditate fugiat, omnis ad, magnam labore
        quos numquam? Quo provident nihil hic necessitatibus debitis?
        Aspernatur, ducimus aut dicta tenetur deserunt corporis odit odio alias
        ab dignissimos delectus deleniti omnis id est impedit neque maiores
        animi repudiandae numquam iure ipsa! Iure minima sit labore rem aliquid
        nulla, tempora quia molestiae fugit voluptatibus facere in sint maxime
        nostrum dignissimos reiciendis quasi. Sequi aliquid laborum voluptatem
        distinctio fugit nostrum consequatur! Incidunt, laborum quo deserunt
        fugit error iure numquam adipisci molestias ea labore repellendus
        placeat obcaecati dignissimos animi eaque eligendi praesentium sit id
        vero. Ab, iste dolorem tempore aspernatur, eaque minima sit neque amet
        minus doloremque aperiam unde in quasi laboriosam tenetur temporibus
        porro deleniti accusantium alias. Mollitia ut adipisci sequi quas
        aperiam inventore veniam rerum facilis incidunt id, aliquam, pariatur
        animi minus, quam ipsum! Repellat iure dicta explicabo exercitationem
        consectetur dignissimos, laudantium ipsam suscipit nemo placeat corrupti
        sit tempore minus consequatur officiis praesentium veritatis repudiandae
        debitis optio voluptatum, accusantium iusto ullam nobis tempora.
        Deserunt odio delectus ea amet accusamus sapiente temporibus laboriosam
        dolores mollitia ab. Porro tempora et aliquid neque eius magni, facere
        atque illum accusantium tenetur consectetur inventore alias ipsa vero
        recusandae, dolorem labore tempore culpa, delectus nemo non laborum
        commodi. Dolorem consequatur expedita nostrum, voluptatem nisi eveniet
        optio fugiat voluptatibus pariatur a obcaecati?
      </p>
      <a className="goUp" href="#">
        retour
      </a>
    </section>
  );
};

export default Home;
