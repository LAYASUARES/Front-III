import "./style.scss"

export function SegundaAula() {
  return (
    <main>
      <h1>Segunda Aula</h1>

      <ul>
        <li>
          <input type="radio" id="first" name="teste" />
          <label htmlFor="first">Produto</label>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias consequatur animi ex deleniti facere dolor consequuntur,
              recusandae, quibusdam distinctio, tenetur omnis cumque. Nihil, est
              officiis repellat dolore esse eum architecto.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" id="Second"  name="teste"/>
          <label htmlFor="Second">Informação</label>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias consequatur animi ex deleniti facere dolor consequuntur,
              recusandae, quibusdam distinctio, tenetur omnis cumque. Nihil, est
              officiis repellat dolore esse eum architecto.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" id="third" name="teste"/>
          <label htmlFor="third">Questões</label>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias consequatur animi ex deleniti facere dolor consequuntur,
              recusandae, quibusdam distinctio, tenetur omnis cumque. Nihil, est
              officiis repellat dolore esse eum architecto.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" id="fourth" name="teste"/>
          <label htmlFor="fourth">Guia</label>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias consequatur animi ex deleniti facere dolor consequuntur,
              recusandae, quibusdam distinctio, tenetur omnis cumque. Nihil, est
              officiis repellat dolore esse eum architecto.
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
}