export const inputStyle =
  "block w-full pl-10 pr-10 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent disabled:opacity-50";
export const formInputStyle = ({
  errors,
}: {
  errors: Record<string, string>;
}) =>
  `block w-full pl-10 pr-3 py-3 bg-white/5 border ${
    errors.title ? "border-status-danger" : "border-border"
  } rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50`;
