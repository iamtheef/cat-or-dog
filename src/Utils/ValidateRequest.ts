export interface IRequest {
  input: string;
  isLink: string;
  file?: any;
}

interface ValidationRepsonse {
  isOK: boolean;
  errors: string[];
}

export const ValidateRequest = (req: IRequest) => {
  let errors: string[] = [];

  const { input, isLink, file } = req;

  if (isLink && input.length === 0) {
    errors.push("Please fill in a link");
  }

  if (!isLink && !file) {
    errors.push("Please select a file first");
  }

  return { isOK: errors.length === 0, errors } as ValidationRepsonse;
};
