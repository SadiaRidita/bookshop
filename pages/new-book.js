import AddBookForm from "../components/NewBookForm";

const NewBookPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Book</h1>
      <AddBookForm />
    </div>
  );
};

export default NewBookPage;
