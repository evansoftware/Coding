export const BreedList = () => {
  const url = "https://dog.ceo/api/breed/hound/images/random/10";
  const { get } = useHttpRequest();
  const data = useQuery < Array < string >> (url, async () => await get(url));
  return { data };
};
