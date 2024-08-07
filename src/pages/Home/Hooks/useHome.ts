import { useTheme } from '@chakra-ui/react';
import { useState } from 'react';
import { FaHelmetSafety } from 'react-icons/fa6';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IconType } from 'react-icons/lib';
import { TfiWrite } from 'react-icons/tfi';
import { Maybe } from 'yup';
import { IEpCharts } from '~/ep-web-components/EpComponents/EpCharts/EpCharts';

export interface chartInfoType {
  title: string;
  icon: IconType;
  chartType: IEpCharts;
  yKey: string;
  xKey?: string;
  lineColor?: string;
  areaColor?: string;
  stroke: string;
  data: {
    total: Maybe<number> | undefined;
    graphData: {
      [key: string]: number | string;
    }[];
  };
}

export default function useHome() {
  const theme = useTheme();
  const [requestLoader, setRequestLoader] = useState(false);
  const [chartsLoader, setChartsLoader] = useState(false);

  const dashboardChartsInfo: chartInfoType[] = [
    {
      title: 'Total Projects',
      icon: FaHelmetSafety,
      chartType: 'line',
      yKey: 'Done',
      lineColor: theme.colors.green[600],
      stroke: theme.colors.primary[500],
      data: {
        total: 0,
        graphData: [
          { Ongoing: 2, Done: 10 },
          { Ongoing: 32, Done: 25 },
          { Ongoing: 2, Done: 10 },
          { Ongoing: 8, Done: 15 },
          { Ongoing: 16, Done: 20 },
          { Ongoing: 32, Done: 25 },
          { Ongoing: 9, Done: 31.5 },
          { Ongoing: 17, Done: 33.5 },
        ],
      },
    },
    {
      title: 'Total Request',
      icon: HiOutlineClipboardDocumentList,
      chartType: 'area',
      xKey: 'name',
      yKey: 'uv',
      areaColor: 'url(#colorUv)',
      stroke: theme.colors.primary[500],
      data: {
        total: 0,
        graphData: [
          {
            name: 'Jan',
            uv: 2000,
          },

          {
            name: 'Feb',
            uv: 1888,
          },
          {
            name: 'Mar',
            uv: 2100,
          },
          {
            name: 'Apr',
            uv: 2380,
          },
          {
            name: 'May',
            uv: 1890,
          },
          {
            name: 'Jun',
            uv: 2990,
          },
          {
            name: 'Jul',
            uv: 3290,
          },
        ],
      },
    },
    {
      title: 'Total Tasks',
      icon: TfiWrite,
      chartType: 'pie',
      yKey: 'Done',
      lineColor: theme.colors.green[600],
      stroke: theme.colors.primary[500],
      data: {
        total: 0,
        graphData: [
          { name: 'Group A', value: 18 },
          { name: 'Group B', value: 5 },
          { name: 'Group C', value: 5 },
        ],
      },
    },
  ];

  return { dashboardChartsInfo, chartsLoader, requestLoader };
}
