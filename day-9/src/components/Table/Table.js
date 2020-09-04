import React from "react";
import data from "../../../data.js"
import RocketFreshIcon from "../../components/RocketIcon/RocketFreshIcon";
import RocketWowIcon from "../../components/RocketIcon/RocketWowIcon";
import SelectBox from "../../components/SelectBox/SelectBox";
import "./Table.css"

const rocketType = {
  ROCKET_FRESH: "ROCKET_FRESH",
  ROCKET_WOW: "ROCKET_WOW",
  PARTNER: "PARTNER"
}

const products = data.products;
const freshProducts = products.filter(item => item.type === rocketType.ROCKET_FRESH);
const wowProducts = products.filter(item => item.type === rocketType.ROCKET_WOW);
const partnerProducts = products.filter(item => item.type === rocketType.PARTNER);

function type({type}) {
  switch (type) {
    case rocketType.ROCKET_FRESH : return <RocketFreshIcon />;
    case rocketType.ROCKET_WOW : return <RocketWowIcon />;
    default: return ""
  }
}

function division({type}) {
  switch (type) {
    case rocketType.ROCKET_FRESH : return "로켓프레시 상품";
    case rocketType.ROCKET_WOW: return "로켓배송 상품(로켓와우 포함)";
    case rocketType.PARTNER: return "판매자배송 상품";
    default: return ""
  }
}

function checkInventory({inventory}) {
  if (!inventory) return <p className="caution">품절</p>
  if (inventory < 5) return <p className="caution">품절임박 {inventory}개 잔여</p>
}

const tabelComponent = data => {
  return <table>
          <thead>
            <tr><td colSpan="7">{division(data[0])}</td></tr>
          </thead>
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
                    {SelectBox(product)}
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
