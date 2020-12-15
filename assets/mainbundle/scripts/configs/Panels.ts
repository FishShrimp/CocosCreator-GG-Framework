import { PanelConfig } from "../../../scripts/framework/lib/router/PanelConfig";
import { Bundles } from "./Bundles";

/**
 * 面板图层层级（层级大的显示在最前面）
 */
enum PanelLayerEnum {
    /**
     * 普通界面
     */
    UILayer = 200,

    /**
     * 弹窗层级
     */
    PopLayer = 400,
}

/**
 * 游戏面板配置
 */
export const Panels = {
    /////////////////////////////////////////////////////////
    // 普通页面层级

    /**
     * 游戏启动页面板
     */
    bootPanel: <PanelConfig>{
        prefabPath: `${Bundles.CommonBundle}/prefabs/boot/BootPanelPrefab`,
        layerZIndex: PanelLayerEnum.UILayer,
    },
    /**
     * 游戏主面板
     */
    gamePanel: <PanelConfig>{
        prefabPath: `${Bundles.GameBundle}/prefabs/game/GamePanelPrefab`,
        layerZIndex: PanelLayerEnum.UILayer,
    },

    /**
     * 游戏设置面板
     */
    gameSettingPanel: <PanelConfig>{
        prefabPath: `${Bundles.GameBundle}/prefabs/setting/GameSettingPanelPrefab`,
        layerZIndex: PanelLayerEnum.UILayer,
    },

    /////////////////////////////////////////////////////////
    // 弹窗层级

    /**
     * 通用加载页面
     */
    loadingPanel: <PanelConfig>{
        prefabPath: `${Bundles.CommonBundle}/prefabs/popwindow/LoadingPanelPrefab`,
        layerZIndex: PanelLayerEnum.PopLayer,
    },

    /**
     * 通用Toast页面
     */
    toastPanel: <PanelConfig>{
        prefabPath: `${Bundles.CommonBundle}/prefabs/popwindow/ToastPanelPrefab`,
        layerZIndex: PanelLayerEnum.PopLayer,
    },
};
