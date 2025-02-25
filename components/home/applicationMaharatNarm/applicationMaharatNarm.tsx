import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useGetMaharatNarmQuery } from '@/redux/maharatNarm';

interface User {
  img: string;
  title: string;
}

interface ApiResponse {
  message: string;
  data: User[];
}

interface ApplicationMaharatNarmProps {
  boxShadow?: {
    boxShadow: string;
  };
  onError?: (error: Error) => void;
  onLoadingChange?: (isLoading: boolean) => void;
}

export default function ApplicationMaharatNarm({
  boxShadow = {
    boxShadow: "0px 10px 50px 0px #EEEEEE"
  },
  onError,
  onLoadingChange
}: ApplicationMaharatNarmProps) {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch
  } = useGetMaharatNarmQuery();

  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    if (error) {
      onError?.(error);
      if (retryCount < maxRetries) {
        const delay = 1000 * Math.pow(2, retryCount);
        const timer = setTimeout(() => refetch(), delay);
        return () => clearTimeout(timer);
      }
    }
  }, [error, retryCount, refetch, maxRetries, onError]);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500" />
        <span className="ml-2">در حال بارگذاری...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <div className="mb-4">
          <i className="fas fa-times-circle text-red-500" />
          <p>خطا: {error.message}</p>
        </div>
        {retryCount < maxRetries ? (
          <button
            onClick={() => setRetryCount(prev => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            تلاش مجدد ({maxRetries - retryCount} باقی‌مانده)
          </button>
        ) : (
          <button
            onClick={refetch}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            بارگذاری مجدد
          </button>
        )}
      </div>
    );
  }

  const users = data?.data?.map<User>((item: User) => ({
    img: item.img,
    title: item.title
  })) || [];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl yekan-bold mt-8 mb-6">
        حوزه‌های مختلف طراحی سایت
      </h2>
      <div className="flex flex-wrap justify-center gap-12 px-4">
        {users.slice(0, 7).map((user: User, index: number) => (
          <Card
            key={index}
            style={boxShadow}
            className="w-40 h-40 transition-transform hover:scale-105"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={user.img}
                alt={user.title}
                className="w-14 h-14 rounded-full object-cover mb-3"
                onError={(e) => {
                  e.currentTarget.src = '/default-image.jpg';
                }}
              />
              <p className="text-center w-[140px] text-sm yekan-regular">
                {user.title}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}