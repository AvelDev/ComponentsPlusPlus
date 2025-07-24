import React from "react";
import Banner from "./index";

export default function BannerDebug() {
  return (
    <div className="flex flex-col gap-2 m-2">
      <Banner type="success">
        <Banner.Title>Congratulations!</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similiue veniam.
        </Banner.Description>
      </Banner>

      <Banner type="warning">
        <Banner.Title>Attention</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similiue veniam.
        </Banner.Description>
      </Banner>

      <Banner type="error">
        <Banner.Title>There is a problem with your application</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similiue veniam.
        </Banner.Description>
      </Banner>

      <Banner type="neutral">
        <Banner.Title>Update available</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similiue veniam.
        </Banner.Description>
      </Banner>

      <Banner type="success">
        <Banner.Title>Congratulations!</Banner.Title>
      </Banner>

      <Banner type="warning">
        <Banner.Title>Attention</Banner.Title>
      </Banner>

      <Banner type="error">
        <Banner.Title>There is a problem with your application</Banner.Title>
      </Banner>

      <Banner type="neutral">
        <Banner.Title>Update available</Banner.Title>
      </Banner>
    </div>
  );
}
