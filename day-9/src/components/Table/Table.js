import React from "react";
import data from "../../../data.js"
import RocketFreshIcon from "../../components/RocketIcon/RocketFreshIcon";
import RocketWowIcon from "../../components/RocketIcon/RocketWowIcon";
import selectBox from "../../components/SelectBox/SelectBox";
import checkInventory from "./Caution";
import "./Table.css"

const rocketType = {
  ROCKET_FRESH: "ROCKET_FRESH",
  ROCKET_WOW: "ROCKET_WOW",
  PARTNER: "PARTNER"
}

const products = data.products
const freshProducts = products.filter(item => item.type === rocketType.ROCKET_FRESH)
const wowProducts = products.filter(item => item.type === rocketType.ROCKET_WOW)
const partnerProducts = products.filter(item => item.type === rocketType.PARTNER)

function type({type}) {
  switch (type) {
    case rocketType.ROCKET_FRESH : return <RocketFreshIcon />;
    case rocketType.ROCKET_WOW : return <RocketWowIcon />;
    default: return ""
  }
}

function caption({type}) {
  switch (type) {
    case rocketType.ROCKET_FRESH : return "로켓프레시 상품";
    case rocketType.ROCKET_WOW: return "로켓배송 상품(로켓와우 포함)";
    case rocketType.PARTNER: return "판매자배송 상품";
    default: return ""
  }
}

const tabelComponent = data => {
  return <table>
          <caption>{caption(data[0])}</caption>
          <tbody>
            {data.map(product => {
              return (
                <tr key={product.id}>
                <td>
                    <input type={"checkbox"}/>
                </td>
                <td>
                    <img src={product.img} alt={product.name} />
                </td>
                <td>
                    {product.name}
                    {checkInventory(product)}
                </td>
                <td>
                    {product.price}
                </td>
                <td>
                    {selectBox(product)}
                </td>
                <td>
                    {product.price * product.count}
                </td>
                <td>
                    {type(product)}
                </td>
                </tr>
              )
            })}
          </tbody>
        </table>
}

export default function Table() {
  return (
    <div>
        { tabelComponent(freshProducts) }
        { tabelComponent(wowProducts) }
        { tabelComponent(partnerProducts) }
    </div>
  )
}
