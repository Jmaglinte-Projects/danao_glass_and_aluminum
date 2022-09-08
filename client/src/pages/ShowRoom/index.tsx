import * as React from "react";

import images from "../../constants/images";
import NonHomeBanner from "../../components/Common/Banner/NonHome";

export default function Images() {
  return (
    <>
      <NonHomeBanner image={images.bnr_show_room} />
    </>
  );
}
