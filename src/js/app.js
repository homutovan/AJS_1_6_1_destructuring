export default function getSpecials({ special }) {
  return special.map((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    return {
      id, name, icon, description,
    };
  });
}
