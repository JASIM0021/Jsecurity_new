import { Linking } from "react-native";
import qs from "qs";
type Iprops = {
  to: String;
  subject: String;
  body: String;
  options: {
    cc: String;
    bcc: String;
  };
};
export async function sendEmail(data: Iprops) {
  const { to, subject, body, options } = data;
  const { cc, bcc } = options;
  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
    subject: subject,
    body: body,
    cc: cc,
    bcc: bcc,
  });

  if (query.length) {
    url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error("Provided URL can not be handled");
  }

  console.log("url", url);

  return Linking.openURL("http://www.google.com").catch((err) => {
    console.log("err", err);
  });
}
