import React, { memo, useMemo } from "react";

const Image = ({ src, options }) => {

  const file = useMemo(() =>
    require(`image/${src}`)
   , [src]);

  return <img src={file.default} alt="" {...options} />;
};

export default memo(Image);
