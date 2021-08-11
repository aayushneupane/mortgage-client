import moment from "moment";

export default function formatDate(value) {
  return moment(String(value)).format("MM/DD/YYYY hh:mm");
}
