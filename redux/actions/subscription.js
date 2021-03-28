import serviceHandler from "../../utils/services/serviceHandler";

export const getPlanAction = async () => {
  try {
    const res = await serviceHandler.get(`plans`);
    console.log("res -->", res);
    if (res.result) {
      return res.body;
    }
    throw res.message;
  } catch (e) {
    throw e;
  }
};
