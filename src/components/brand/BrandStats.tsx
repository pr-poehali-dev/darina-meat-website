const BrandStats = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="text-center space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Почему выбирают «Дарину»?
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-red-600">98%</div>
            <div className="text-sm text-gray-600">
              покупателей рекомендуют друзьям
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-red-600">1000+</div>
            <div className="text-sm text-gray-600">
              торговых точек по всей России
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStats;
