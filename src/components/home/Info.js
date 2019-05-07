import React from "react"
import { Link } from "gatsby"

import Title from "../global/Tttle"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
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
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
