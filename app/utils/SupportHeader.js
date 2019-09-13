import Session from "./Session";

const SupportHeader = async (extraMetadata) => {
  let header = {};
  const token = await Session.getData("token");

  if (token) {
    header = {
      headers: {
        Authorization: `Bearer ${token}`,
        ...extraMetadata
      },
    };
  }
  console.log("here is token", token);
  return header;
};

export default SupportHeader
