import { useState } from "react";
import { Col } from "antd";
import { ImageUpload } from "../../pagePartial";
import "./PropertyFormImageUpload.scss";

const PropertyFormImageUpload = ({ value, onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const _addMore = () => {
    if (quantity < 9) {
      setQuantity(quantity + 3);
    }
  };

  const _saveUrl = (url) => {
    let arr = [...value];
    arr.push(url);
    const eve = {
      target: {
        name: "images",
        value: arr,
      },
    };
    onChange(eve);
  };

  const getComponent = () => {
    let arr = [];
    for (let i = 0; i < quantity; i++) {
      if (i <= value.length - 1) {
        arr.push(
          <Col xl={8} lg={8} md={8} sm={12}>
            <ImageUpload saveUrl={_saveUrl} url={value[i]} key={i} />
          </Col>
        );
      } else {
        arr.push(
          <Col xl={8} lg={8} md={8} sm={12}>
            <ImageUpload saveUrl={_saveUrl} key={i} />
          </Col>
        );
      }
    }
    return arr;
  };
  return (
    <>
      <Col span={18} className="marginBottom">
        {/* <p
          className={`add-more ${quantity < 9 ? 'clickable' : 'disabled'}`}
          onClick={_addMore}>
          Add more
        </p> */}
        {/* <br/> */}
        {getComponent()}
      </Col>
    </>
  );
};

export { PropertyFormImageUpload };
