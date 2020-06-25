/* eslint-disable max-len */
const OSS_BUCKET = "bitmobcc"
const ASSET_PATH = `//${OSS_BUCKET}.oss-cn-shenzhen.aliyuncs.com`
const SITE_NAME = "mafmadmaf"

module.exports = {
  SITE_URL: "https://cv.mafmadmaf.com",
  ASSET_PATH,
  IMAGE_PATH: `${ASSET_PATH}/images`,
  ICON_PATH: `${ASSET_PATH}/icons`,
  FONT_PATH: `${ASSET_PATH}/fonts`,
  CASE_PATH: `${ASSET_PATH}/maf/images`,
  PWA_ASSET_PATH: `${ASSET_PATH}/pwa`,
  SITE_NAME,
  SITE_TITLE: `${SITE_NAME}`,
  WX_SIGN_URL: "https://www.bitmob.cc/api/wx",
  SITE_DESC:
    "Ed Lee is a creative coder. I made various interactive stuff online and offline. Co-founded bitmob.cc. Here is my personal playground.",
}
