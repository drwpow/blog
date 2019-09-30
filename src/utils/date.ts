export default function date(datetime: string) {
  return datetime.replace(/-/g, '.');
}
