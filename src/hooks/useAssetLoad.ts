export interface IUseAssetLoadProps {
  /**
   * Callback to do on any render loop
   */
  action: (props?: any, ...restProps: any) => any
}

const useAssetLoad = ({ action }: IUseAssetLoadProps) => {
  const onLoadAsset = (src: string, ...props: any) => {
    const image: any = new Image()
    image.src = src

    action(image, ...props)
  }

  return { onLoadAsset }
}

export default useAssetLoad
