import ButterCMS from "buttercms";

// ButterCMS Read API Token from https://buttercms.com/settings/
const butterCMSClient = ButterCMS(process.env.BUTTERCMS_READ_API_TOKEN);

export default butterCMSClient;
