export const validation = async (schema: any, data: any) => {
    try {
      await schema.validate(data, { abortEarly: false });
      return null; 
    } catch (error: any) {
      return error.errors;
    }
}