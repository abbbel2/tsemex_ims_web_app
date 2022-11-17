import MainLayout from "../Layout/Main.layout";

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col space-y-8 justify-center items-center m-auto h-screen">
        <img
          src="/assets/images/Tsemex_brand logo/Tsemex_brand logo@2x.png"
          width="25%"
        />
        <p className="text-xl">Welcome!</p>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
