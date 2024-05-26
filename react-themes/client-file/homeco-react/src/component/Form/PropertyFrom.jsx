import { useState } from "react";
import PropertyTextInput from "./PropertyTextInput";
import PropertyTextArea from "./PropertyTextArea";
import ImageInput from "./ImageInput";
import PropertyVideoInput from "./PropertyVideoInput";
import PropertyLocationInput from "./PropertyLocationInput";
import PropertyAminitiesInput from "./PropertyAminitiesInput";
import KeyValueInput from "./KeyValueInput";
import PropertyPlan from "./PropertyPlan";
import PropertyTextAreaV2 from "./PropertyTextAreaV2";
import SwitcherBtn from "./SwitcherBtn";

function PropertyFrom() {
  const [input, setInput] = useState({
    title: "",
    slug: "",
    propertyType: "",
    purpose: "",
    rentPeriod: "",
    propertyPrice: "",
    area: "",
    unit: "",
    bedroom: "",
    bathroom: "",
    garage: "",
    kitchen: "",
    description: "",
    propertyImage: [
      { id: 1, img: "https://placehold.co/165x205" },
      { id: 2, img: "https://placehold.co/165x205" },
      { id: 3, img: "https://placehold.co/165x205" },
    ],
    video: { video: "", description: "", YTVideoId: "" },
    location: { city: "", address: "", addressDetails: "", googleMap: "" },
    aminities: {
      Breakfast: true,
      Lunch: false,
      ["Free Wifi"]: false,
      ["Swimming Pool"]: false,
      Cleaning: false,
    },
    nearestLocation: [
      { id: 1, key: "", value: "" },
      { id: 2, key: "", value: "" },
      { id: 3, key: "", value: "" },
    ],
    additionalInformation: [
      { id: 1, key: "", value: "" },
      { id: 2, key: "", value: "" },
      { id: 3, key: "", value: "" },
    ],
    propertyPlan: [
      {
        id: 1,
        videoId: "",
        thumbnail: "https://placehold.co/528x196",
        desc: "",
      },
      {
        id: 2,
        videoId: "",
        thumbnail: "https://placehold.co/528x196",
        desc: "",
      },
      {
        id: 3,
        videoId: "",
        thumbnail: "https://placehold.co/528x196",
        desc: "",
      },
    ],
    seoInfo: {
      title: "",
      desc: "",
      status: true,
      urgentProperty: false,
      featured: true,
      topProperty: false,
    },
  });

  // handle property information

  const handleTextChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // handle editable textarea
  const handleTextArea = (e) => {
    setInput({ ...input, [e.name]: e.value });
  };

  // delete property image

  const handleImageDelete = (id) => {
    setInput({
      ...input,
      propertyImage: input.propertyImage.filter((image) => image.id !== id),
    });
  };

  // handle property video input sector

  const handleVideoChange = (e) => {
    setInput({
      ...input,
      video: { ...input.video, [e.target.name]: e.target.value },
    });
  };

  // handle property location input sector

  const handleLocationChange = (e) => {
    setInput({
      ...input,
      location: { ...input.location, [e.target.name]: e.target.value },
    });
  };

  // handle property image input sector

  const handleImageInput = (img) => {
    const updatedImg = [...input.propertyImage];
    updatedImg.push({
      id: updatedImg.reduce((total, current) => total > current.id, 0) + 1,
      img,
    });
  };

  // handle aminities

  const handleCheckBox = (e) => {
    setInput({
      ...input,
      aminities: { ...input.aminities, [e.target.name]: e.target.checked },
    });
  };
  // handle Property Plan, additionalInformation, nearestLocation add new item or delete item

  const handleAddOrDelete = (type, id, keyType) => {
    if (type === "add") {
      const newId =
        input[keyType].reduce(
          (max, current) => (max < current.id ? current.id : max),
          0
        ) + 1;
      setInput({
        ...input,
        [keyType]: [{ id: newId, key: "", value: "" }, ...input[keyType]],
      });
    } else {
      setInput({
        ...input,
        [keyType]: input[keyType].filter((item) => item.id != id),
      });
    }
  };
  // handle Property Plan, additionalInformation, nearestLocation input filled
  const handleKeyValueChange = ({ id, keyType, inputType, value }) => {
    setInput({
      ...input,
      [keyType]: input[keyType].map((item) =>
        item.id === id ? { ...item, [inputType]: value } : item
      ),
    });
  };
  //handle SEO Sector input
  const handleSEO = (e, value) => {
    if (typeof value === "undefined") {
      setInput({
        ...input,
        seoInfo: { ...input.seoInfo, [e.target.name]: e.target.value },
      });
    } else {
      setInput({
        ...input,
        seoInfo: { ...input.seoInfo, [e]: value },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <section className="pd-top-80 pd-btm-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" onSubmit={(e) => handleSubmit(e)}>
              <div className="homec-submit-form">
                <h4 className="homec-submit-form__title">
                  Property Information
                </h4>
                <div className="homec-submit-form__inner">
                  <div className="row">
                    <PropertyTextInput
                      title="Property Title*"
                      name="title"
                      value={input.title}
                      handleChange={handleTextChange}
                      placeholder="Title"
                    />
                    <PropertyTextInput
                      title="Slug*"
                      name="slug"
                      value={input.slug}
                      handleChange={handleTextChange}
                      placeholder="Here is dmeo text"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Property Type*"
                      name="propertyType"
                      value={input.propertyType}
                      handleChange={handleTextChange}
                      placeholder="Apartment"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Purpose*"
                      name="purpose"
                      value={input.purpose}
                      handleChange={handleTextChange}
                      placeholder="For Rent"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Rent Period*"
                      name="rentPeriod"
                      value={input.rentPeriod}
                      handleChange={handleTextChange}
                      placeholder="Monthly"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Property Price"
                      name="propertyPrice"
                      value={input.propertyPrice}
                      handleChange={handleTextChange}
                      placeholder="24345"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Total Area (sq:Ft)*"
                      name="area"
                      value={input.area}
                      handleChange={handleTextChange}
                      placeholder="Here is demo text"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Total Unit*"
                      name="unit"
                      value={input.unit}
                      handleChange={handleTextChange}
                      placeholder="1"
                      type="number"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Total Bedroom*"
                      name="bedroom"
                      value={input.bedroom}
                      handleChange={handleTextChange}
                      placeholder="2"
                      type="number"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Total Bathroom*"
                      name="bathroom"
                      value={input.bathroom}
                      handleChange={handleTextChange}
                      placeholder="2"
                      type="number"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Total Garage*"
                      name="garage"
                      value={input.garage}
                      handleChange={handleTextChange}
                      placeholder="1"
                      type="number"
                    />
                    <PropertyTextInput
                      size="col-lg-6 col-md-6"
                      title="Total Kitchen*"
                      name="kitchen"
                      value={input.kitchen}
                      handleChange={handleTextChange}
                      placeholder="1"
                      type="number"
                    />
                  </div>
                  {/* Single Form Element  */}
                  <PropertyTextArea
                    title="Description*"
                    name="description"
                    value={input.description}
                    handleChange={handleTextArea}
                    placeholder="Description"
                  />
                </div>
              </div>
              <ImageInput
                uploadedImg={input.propertyImage}
                handleDelete={handleImageDelete}
                handleImage={handleImageInput}
              />
              <PropertyVideoInput
                handleVideoInput={handleVideoChange}
                video={input.video}
              />
              <PropertyLocationInput
                location={input.location}
                handleLocation={handleLocationChange}
              />
              <PropertyAminitiesInput
                aminities={input.aminities}
                handleChange={handleCheckBox}
              />
              <KeyValueInput
                info={input.nearestLocation}
                handleAddOrDelete={handleAddOrDelete}
                handleChange={handleKeyValueChange}
                title="Nearest Location"
                filedTitle="Nearest Location*"
                filedTitleTwo="Distance(KM)*"
                placeholdertwo="10km"
                options={[
                  {
                    id: 1,
                    name: "Dhaka",
                  },
                  {
                    id: 2,
                    name: "Chittagong",
                  },
                  {
                    id: 2,
                    name: "Khulna",
                  },
                ]}
                keyType="nearestLocation"
              />

              <KeyValueInput
                info={input.additionalInformation}
                handleAddOrDelete={handleAddOrDelete}
                handleChange={handleKeyValueChange}
                title="Additional Information"
                filedTitle="Key*"
                filedTitleTwo="Value*"
                placeholderTwo="Type Here"
                placeholderOne="Type Here"
                options={[
                  {
                    id: 1,
                    name: "Dhaka",
                  },
                  {
                    id: 2,
                    name: "Chittagong",
                  },
                  {
                    id: 2,
                    name: "Khulna",
                  },
                ]}
                keyType="additionalInformation"
              />
              <PropertyPlan
                info={input.propertyPlan}
                handleChange={handleKeyValueChange}
                handleAddOrDelete={handleAddOrDelete}
              />

              <div className="homec-submit-form mg-top-40">
                <h4 className="homec-submit-form__title">
                  SEO Information and Others
                </h4>
                <div className="homec-submit-form__inner">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      {/* Single Form Element   */}
                      <PropertyTextInput
                        title="SEO Title*"
                        placeholder="Type Here"
                        name="title"
                        value={input.seoInfo.title}
                        handleChange={handleSEO}
                      />
                      {/* Single Form Element   */}
                      <PropertyTextAreaV2
                        title="SEO Description"
                        value={input.seoInfo.desc}
                        handleChange={handleSEO}
                        name="desc"
                        placeHolder="Type Here"
                        sizeFull={true}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="homeco-switcher-group mg-top-20">
                        <div className="homeco-switcher-group__single">
                          {/* Single Switcher  */}
                          <SwitcherBtn
                            title="Status"
                            name="status"
                            isChecked={input.seoInfo.status}
                            handleChange={handleSEO}
                          />
                          <SwitcherBtn
                            title="Urgent Property"
                            isChecked={input.seoInfo.urgentProperty}
                            name="urgentProperty"
                            handleChange={handleSEO}
                          />

                          {/* End Single Switcher  */}
                        </div>
                        <div className="homeco-switcher-group__single">
                          <SwitcherBtn
                            title="Featured"
                            name="featured"
                            isChecked={input.seoInfo.featured}
                            handleChange={handleSEO}
                          />
                          <SwitcherBtn
                            title="Top Property"
                            name="topProperty"
                            isChecked={input.seoInfo.topProperty}
                            handleChange={handleSEO}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end mg-top-40">
                  <button type="submit" className="homec-btn homec-btn__second">
                    <span>Submit Property Now</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyFrom;
