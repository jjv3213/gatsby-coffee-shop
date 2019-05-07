import React, { useState } from "react"

import Title from "../global/Tttle"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  // set allows for getting only unique category values
  let tempCategories = new Set(tempItems)
  // turn the object into an array
  let categories = Array.from(tempCategories)
  // add an "all" category
  categories = ["all", ...categories]
  return categories
}

const handleItems = (category, items, setshownItems) => {
  if (category === "all") {
    setshownItems(items)
  } else {
    let filteredItems = items.filter(({ node }) => node.category === category)
    setshownItems(filteredItems)
  }
}

const Menu = ({ menu }) => {
  const items = menu.edges
  const [shownItems, setshownItems] = useState(menu.edges)
  const categories = getCategories(menu.edges)

  if (items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Best of our menu" />
          {/** Categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => handleItems(category, items, setshownItems)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          {/* Items */}
          <div className="row">
            {shownItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0 text-capitalize">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>There are no items to display.</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
