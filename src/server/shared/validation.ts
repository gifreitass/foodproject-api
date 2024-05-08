export const validation = async (schema, data) => {
    try {
      await schema.validate(data, { abortEarly: false });
      return null; 
    } catch (error) {
      return error.errors;
    }
}