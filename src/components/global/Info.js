import React from "react"
import { Link } from "gatsby"

import Title from "./Tttle"

const Info = ({ title, btnText, link }) => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title={title} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              perferendis ducimus fuga possimus aperiam blanditiis odio esse
              obcaecati voluptate, ratione molestiae debitis tempora, laboriosam
              doloremque! Excepturi amet iste expedita, quos esse velit
              recusandae exercitationem sequi autem dolor officiis soluta
              ratione deleniti, quibusdam nemo? Cumque porro quibusdam nesciunt
              modi nulla incidunt.
            </p>
            <Link to={link}>
              <button className="btn text-uppercase btn-yellow">
                {btnText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
