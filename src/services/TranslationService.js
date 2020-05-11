import enUS from '@langs/en-us'

const get = (key) => {
  if (!key) {
    return '';
  }
  const term = enUS[key] || '';
  return term;
}

export default  {
  get
}